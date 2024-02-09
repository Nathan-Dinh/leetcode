/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let obj = {};
  let answer = "";
  for (let i = 0; i < s.length; i++)
    obj.hasOwnProperty(s[i]) ? (obj[s[i]] += s[i]) : (obj[s[i]] = s[i]);
  let sortedArr = Object.values(obj).sort((a, b) => b.length - a.length);
  for (let value in sortedArr) answer += sortedArr[value];
  return answer;
};
