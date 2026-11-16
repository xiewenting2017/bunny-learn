import { useState, useEffect } from 'react'

// ── 统一语音播报：后端豆包 TTS 优先，失败自动 fallback 浏览器原生 ────
//
// 两种用法：
//   1. React Hook：const { speaking, loading, speak, stop } = useSpeech()
//   2. 纯函数：await trySpeech(text, { onSuccess, onFail, useNativeOnly })
//
// 优先级：
//   1. POST /api/tts → 后端分句流式豆包 TTS（专业配音员）
//   2. fallback → 浏览器原生 speechSynthesis（系统自带中文语音）

const NATIVE_TTS = typeof window !== 'undefined' && 'speechSynthesis' in window

// 后端连续失败计数 —— 全局共享，失败 2 次后全局跳过，省得每个组件都等 8s
let backendFailCount = 0

// 后端 TTS 健康状态缓存：'unknown' | 'ok' | 'dead'
// 启动时 / 首次调用时探测一次
let backendStatus = 'unknown'
let statusCheckPromise = null

async function checkBackendTTS() {
  if (backendStatus !== 'unknown') return backendStatus

  // 简单健康检查：发一个极短文本看 403 / 200 / 连接失败
  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '嗨' }),
      signal: AbortSignal.timeout(5000),
    })
    if (res.ok) {
      backendStatus = 'ok'
      backendFailCount = 0
    } else {
      // 403/401 = key 无效或无权限 → 后端"死掉"
      backendStatus = 'dead'
      backendFailCount = 999 // 直接锁死
      console.warn('[speech] 后端 TTS 不可用 (HTTP', res.status, ')，将使用浏览器原生语音')
    }
  } catch (e) {
    // 连接失败 / timeout → 后端挂了
    backendStatus = 'dead'
    backendFailCount = 999
    console.warn('[speech] 后端 TTS 连不上 (' + e.message + ')，将使用浏览器原生语音')
  }
  return backendStatus
}

export function pickBestChineseVoice() {
  if (!NATIVE_TTS) return null
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null

  const PREFERRED = [
    /Tingting/i,
    /Xiaoxiao/i,
    /Yunxi\.neural/i,
    /Yunxi/i,
    /Yunjian/i,
    /Yunyang/i,
    /Chinese.*Female/i,
    /Mandarin/i,
  ]

  for (const re of PREFERRED) {
    const v = voices.find((x) => x.lang?.startsWith('zh') && re.test(x.name))
    if (v) return v
  }
  return voices.find((v) => v.lang?.startsWith('zh')) || null
}

function speakNativeText(text, { onStart, onEnd, onError, rate = 0.9 }) {
  if (!NATIVE_TTS) return false
  try {
    window.speechSynthesis.cancel()
    const voice = pickBestChineseVoice()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'zh-CN'
    if (voice) u.voice = voice
    u.rate = rate
    u.pitch = 1.0
    if (onStart) u.onstart = onStart
    if (onEnd) u.onend = onEnd
    if (onError) u.onerror = onError
    window.speechSynthesis.speak(u)
    return true
  } catch (e) {
    onError?.(e)
    return false
  }
}

// ── 纯函数：尝试朗读一段文字 ──
// 返回 Promise<boolean> —— true 表示已经在播，false 表示都没成功
//
// 可选项：
//   useNativeOnly: true → 跳过后端（直接用浏览器原生）
//   skipBackend:   true → 同上
//   onSuccess:     两边任一成功都会回调
//   onFail:        两边都失败才回调
//   onBackendFail: 后端单独失败时回调（可选）
//   rate:          原生语速（默认 0.9）
export async function trySpeech(text, opts = {}) {
  if (!text) return false
  const { useNativeOnly, skipBackend, onSuccess, onFail, onBackendFail, rate } = opts

  // ── 路径 A：后端豆包 TTS ──
  // 先做一次健康检查（只等 5s，之后缓存结果）
  if (!useNativeOnly && !skipBackend && backendFailCount < 2) {
    await checkBackendTTS() // 第一次会 fetch，之后直接返回缓存值
  }
  if (!useNativeOnly && !skipBackend && backendFailCount < 2 && backendStatus === 'ok') {
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
        signal: AbortSignal.timeout(6000), // 6s 够了
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const reader = res.body.getReader()
      const chunks = []
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        chunks.push(value)
      }
      if (chunks.length === 0) throw new Error('空音频')

      backendFailCount = 0 // 成功 → 重置

      const blob = new Blob(chunks, { type: 'audio/mpeg' })
      const url = URL.createObjectURL(blob)
      const audio = new Audio(url)

      audio.onended = () => {
        URL.revokeObjectURL(url)
      }
      try {
        await audio.play()
        onSuccess?.('backend')
        return true
      } catch {
        // Audio.play() 被浏览器策略拦了 → fallback 原生
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.warn('[speech] 后端 TTS 失败:', err.message)
      backendFailCount++
      onBackendFail?.(err)
    }
  }

  // ── 路径 B：浏览器原生 ──
  if (NATIVE_TTS) {
    const ok = speakNativeText(text, {
      rate,
      onStart: () => onSuccess?.('native'),
      onError: () => onFail?.('native'),
    })
    if (ok) return true
  }

  onFail?.()
  return false
}

// ── React Hook 版（组件里用） ──
export function useSpeech() {
  const [speaking, setSpeaking] = useState(false)
  const [loading, setLoading] = useState(false)

  const speak = async (text) => {
    if (!text) return
    setLoading(true)
    // 先停掉正在播的原生语音
    if (NATIVE_TTS) window.speechSynthesis.cancel()

    const ok = await trySpeech(text, {
      onSuccess: () => {
        setSpeaking(true)
        // 原生 speechSynthesis 没有 promise，我们需要定时检查状态
      },
      onFail: () => {
        setSpeaking(false)
      },
      onBackendFail: () => {
        // 后端失败了，等着 trySpeech 里的 fallback 原生
      },
    })

    if (!ok) {
      setSpeaking(false)
    } else if (NATIVE_TTS) {
      // 原生版：等 speechSynthesis 播完再更新状态
      const checkDone = () => {
        if (!window.speechSynthesis.speaking) {
          setSpeaking(false)
          setLoading(false)
          return
        }
        setTimeout(checkDone, 200)
      }
      setTimeout(checkDone, 300)
    }
    setLoading(false)
  }

  const stop = () => {
    if (NATIVE_TTS) window.speechSynthesis.cancel()
    setSpeaking(false)
    setLoading(false)
  }

  useEffect(() => {
    if (NATIVE_TTS) {
      window.speechSynthesis.onvoiceschanged = () => { /* voices loaded */ }
      window.speechSynthesis.getVoices()
    }
    return () => {
      if (NATIVE_TTS) window.speechSynthesis.cancel()
    }
  }, [])

  return { speaking, loading, speak, stop }
}
