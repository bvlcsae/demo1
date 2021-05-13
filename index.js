const testArr = [1, 8, 2, 9, 4, 6, 7, 0]

// function quickSort(arr) {
//   if (arr.length < 1) { return arr}
//   const pivot  = arr.length / 2 | 0
//   const pivotValue = arr.splice(pivot, 1)[0]
//   const left = []
//   const right = []
//   arr.forEach(item => {
//     if (item > pivotValue) {
//       right.push(item)
//     } else {
//       left.push(item)
//     }
//   })
//   return [...quickSort(left), pivotValue, ...quickSort(right)]
// }
//
// console.log(quickSort(testArr))

function quickSort(arr, left, right) {          //这个left和right代表分区后“新数组”的区间下标，因为这里没有新开数组，所以需要left/right来确认新数组的位置
  if (left < right) {
    let pos = left - 1                      //pos即“被置换的位置”，第一趟为-1
    for(let i = left; i <= right; i++) {    //循环遍历数组，置换元素
      let pivot = arr[right]              //选取数组最后一位作为基准数，
      if(arr[i] <= pivot) {               //若小于等于基准数，pos++，并置换元素, 这里使用小于等于而不是小于, 其实是为了避免因为重复数据而进入死循环
        pos++
        let temp = arr[pos]
        arr[pos] = arr[i]
        arr[i] = temp
      }
    }
    //一趟排序完成后，pos位置即基准数的位置，以pos的位置分割数组
    quickSort(arr, left, pos - 1)
    quickSort(arr, pos + 1, right)
  }
  return arr      //数组只包含1或0个元素时(即left>=right)，递归终止
}

//使用
// var arr = [5,1,4,2,3]
// var start = 0;
// var end = arr.length - 1;
// quickSort(arr, start, end)

function swap(A, i, j) {
  const temp = A[i]
  A[tag] = A[i]
  A[i] = temp
}

function qSort(A, left, right) {
  // if (!right) {
  //   right = A.length
  // }

  right = right || A.length - 1

  if (left < right) {

    let tag = left - 1

    for (let i = left; i <= right; i++) {
      const pivot = A[right]
      if (A[i] <= pivot) {
        tag++
        const temp = A[tag]
        A[tag] = A[i]
        A[i] = temp
      }
    }

    qSort(A, left, tag - 1)
    qSort(A, tag + 1, right)
  }
  return A
}

console.log(qSort(testArr, 0, testArr.length - 1))
