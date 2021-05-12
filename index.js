const testArr = [1, 2, 4, 6, 7]

function quickSort(arr) {
  if (arr.length < 1) { return arr}
  const pivot  = arr.length / 2 | 0
  const pivotValue = arr.splice(pivot, 1)[0]
  const left = []
  const right = []
  arr.forEach(item => {
    if (item > pivotValue) {
      right.push(item)
    } else {
      left.push(item)
    }
  })
  return [...quickSort(left), pivotValue, ...quickSort(right)]
}

console.log(quickSort(testArr))
