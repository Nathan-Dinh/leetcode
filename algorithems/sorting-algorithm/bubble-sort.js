//Naive Solution
function naiveBubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

//Better Solution
function bubbleSort(arr) {
  for (let j = arr.length; j > 0; j--) {
    for (let i = 0; i < j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

//Better Better Solution
function betterBubbleSort(arr) {
  let noSwap;
  for (let j = arr.length; j > 0; j--) {
    noSwap = true;
    for (let i = 0; i < j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

console.log(naiveBubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([37, 45, 29, 8]));
console.log(betterBubbleSort([37, 45, 29, 8]));

