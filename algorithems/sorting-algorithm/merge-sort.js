function merge(arr, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr.length && j < arr2.length) {
    if (arr2[j] > arr[i]) {
      results.push(arr[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr.length) {
    results.push(arr[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1,0,0,1,2,1,2]));


