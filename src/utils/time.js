export function getTime(h=0, m=0, s=0, ms=0) {
  const d = new Date(0)
  d.setHours(h)
  d.setMinutes(m)
  d.setSeconds(s)
  d.setMilliseconds(ms)
  return d
}

export function getCurrentTime() {
  const now = new Date()
  return getTime(
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds()
  )
}

export function timeToHHMM(date) {
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()

  return (
    (h < 10 ? '0' : '') + h + ':' +
    (m < 10 ? '0' : '') + m + ':' +
    (s < 10 ? '0' : '') + s
  )
}