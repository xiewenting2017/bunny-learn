// 轻量防抖工具 —— 不引入 lodash 这种重依赖
// 用法：const debounced = debounce(fn, 300); debounced()
export function debounce(fn, wait = 300) {
  let timer = null
  return function debounced(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, wait)
  }
}

// 节流：保证一段时间内最多执行一次
export function throttle(fn, wait = 300) {
  let lastCall = 0
  let timer = null
  return function throttled(...args) {
    const now = Date.now()
    const remaining = wait - (now - lastCall)
    if (remaining <= 0) {
      lastCall = now
      if (timer) { clearTimeout(timer); timer = null }
      fn.apply(this, args)
    } else if (!timer) {
      timer = setTimeout(() => {
        lastCall = Date.now()
        timer = null
        fn.apply(this, args)
      }, remaining)
    }
  }
}
