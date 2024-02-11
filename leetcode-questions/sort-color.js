/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i];
    for (var j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = currentVal;
  }
};
