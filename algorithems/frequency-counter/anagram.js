const validAnagram = (str1, str2) => {
  if (str1.length != str2.length) return false;
  const stringObject = {};
  for (var i = 0; i < str1.length; i++) {
    stringObject.hasOwnProperty([str1[i]])
      ? (stringObject[str1[i]] += 1)
      : (stringObject[str1[i]] = 1);
  }
  for (var p = 0; p < str2.length; p++) {
    if (!stringObject.hasOwnProperty([str2[p]]) || stringObject[str2[p]] === 0)
      return false;
    stringObject[str2[p]] -= 1;
  }
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
