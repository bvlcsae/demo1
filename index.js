function myCall(thisArgs, ...args) {
  thisArgs.fn = this
  return thisArgs.fn(...args)
}
