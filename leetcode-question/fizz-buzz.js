/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    let answerStr = "";
    if (i % 3 === 0) answerStr += "Fizz";
    if (i % 5 === 0) answerStr += "Buzz";
    answerStr.length <= 0 ? answer.push(`${i}`) : answer.push(answerStr);
  }
  return answer;
};
