/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let obj = {};
  if (ransomNote.length > magazine.length) return false;
  for (let i = 0; i < magazine.length; i++) {
    obj.hasOwnProperty(magazine[i])
      ? (obj[magazine[i]] += 1)
      : (obj[magazine[i]] = 1);
  }
  for (let k = 0; k < ransomNote.length; k++) {
    if (obj.hasOwnProperty(ransomNote[k]) && obj[ransomNote[k]] != 0) {
      obj[ransomNote[k]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
