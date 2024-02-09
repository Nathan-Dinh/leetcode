function quickSort(arr, start, end) {
  if (start >= end) return arr;
  let pivot = partition(arr, start, end); // sort our array and find the pivot
  quickSort(arr, start, pivot - 1); // right of pivot
  quickSort(arr, pivot + 1, end); // left of pivot
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let swapIdex = start - 1;

  for (let j = start; j < arr.length; j++) {
    if (pivot > arr[j]) {

      swapIdex++;
      let temp = arr[swapIdex];
      arr[swapIdex] = arr[j];
      arr[j] = temp;
    }
  }
  swapIdex++;
  let temp = arr[swapIdex];
  arr[swapIdex] = arr[end];
  arr[end] = temp;
  return swapIdex;
}

let arr = [8, 1, 5, 3, 9, 4, 7, 6, 2];
let hardCodedArray1 = [5, -2, -8, -1, 7, 3, 3, 3, 9, 4];
let hardCodedArray2 = [9, 3, 6, 2, 8, 5, 1, 7, 4, 10];

quickSort(arr, 0, arr.length - 1);
// quickSort(hardCodedArray1, 0, hardCodedArray1.length - 1);
// quickSort(hardCodedArray2, 0, hardCodedArray2.length - 1);
console.log(arr);
// console.log(hardCodedArray1);
// console.log(hardCodedArray2);
