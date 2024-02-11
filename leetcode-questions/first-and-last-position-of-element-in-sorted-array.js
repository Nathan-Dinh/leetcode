/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let firstOccurrence = null;
  let lastOccurrence = null;
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
      lastOccurrence = tracker;
      tracker++;
    } else {
      answer.push(firstOccurrence);
      answer.push(lastOccurrence);
      break;
    }
  }

  return answer.length != 0 ? answer : [-1, -1];
};
