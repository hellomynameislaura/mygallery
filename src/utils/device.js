export function isMobile() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent)
}

export function isLowPerformance() {
  return navigator.hardwareConcurrency <= 4
}
