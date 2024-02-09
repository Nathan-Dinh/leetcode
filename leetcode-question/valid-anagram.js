/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let obj = {};
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    obj.hasOwnProperty(s[i]) ? (obj[s[i]] += 1) : (obj[s[i]] = 1);
  }
  for (let k = 0; k < s.length; k++) {
    if (obj.hasOwnProperty(t[k]) && obj[t[k]] != 0) {
      obj[t[k]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
