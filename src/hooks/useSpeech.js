import { useEffect, useState } from 'react'

// 统一的语音播报能力，组件卸载时自动停止朗读
export function useSpeech() {
  const [speaking, setSpeaking] = useState(false)

  const speak = (text) => {
    if (!('speechSynthesis' in window) || !text) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel()
    }
  }, [])

  return { speaking, speak }
}
