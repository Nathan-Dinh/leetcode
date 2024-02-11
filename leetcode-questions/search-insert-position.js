/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let output = [];

  function swapInPlace(arrToSwap, indexA, indexB) {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  }

  function generate(n, heapArr) {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
  }

  generate(nums.length, nums.slice());
  return output;
};
