/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let head = 0;
  let tail = 0;
  let obj = {};
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      if (head <= obj[s[i]]) head = obj[s[i]] + 1;
      delete obj[s[i]];
    }
    obj[s[i]] = i;
    tail++;
    if (answer.length < s.substring(head, tail).length) {
      answer = s.substring(head, tail);
    }
  }
  return answer.length;
};
