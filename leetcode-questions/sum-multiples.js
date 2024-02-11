/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      answer += i;
    }
  }
  return answer;
};

//Recursive function
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n, current = 1) {
  if (current > n) {
    return 0;
  }
  let currentMultiple =
    current % 3 === 0 || current % 5 === 0 || current % 7 === 0 ? current : 0;
  return currentMultiple + sumOfMultiples(n, current + 1);
};
