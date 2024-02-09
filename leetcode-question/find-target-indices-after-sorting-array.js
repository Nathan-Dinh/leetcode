/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
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

  function quickSort(arr, start, end) {
    if (start >= end) return arr;
    let pivot = partition(arr, start, end); // sort our array and find the pivot
    quickSort(arr, start, pivot - 1); // right of pivot
    quickSort(arr, pivot + 1, end); // left of pivot
  }

  var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let firstOccurrence = null;
    let answer = [];
    let tracker = null;

    while (start <= end) {
      const middle = Math.floor(start + (end - start) / 2);
      if (nums[middle] === target) {
        firstOccurrence = middle;
        end = middle - 1;
      } else if (nums[middle] < target) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
      tracker = firstOccurrence;
    }

    while (true) {
      if (tracker === null) break;
      if (nums[tracker] === target) {
        answer.push(tracker);
        tracker++;
      } else {
        break;
      }
    }
    return answer.length != 0 ? answer : [];
  };
  quickSort(nums, 0, nums.length - 1);
  return searchRange(nums, target);
};
