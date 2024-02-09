const countUniqueValues = (arrNumbers) => {
  if (arrNumbers.length === 0) return 0;
  let head = 0;
  for (let tail = 1; tail < arrNumbers.length; tail++) {
    if (arrNumbers[head] !== arrNumbers[tail]) {
      head++;
      arrNumbers[head] = arrNumbers[tail];
    }
  }
  return head + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
