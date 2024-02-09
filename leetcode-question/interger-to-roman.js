/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let output = "";

  while (num > 1000) {
    num -= 1000;
    output += "M";
  }

  while (num < 1000 && num >= 100) {
    console.log("1");
    if (num >= 900 && num < 1000) {
      num -= 900;
      output += "CM";
    } else if (num >= 400 && num < 500) {
      num -= 400;
      output += "CD";
    } else if (num >= 500) {
      num -= 500;
      output += "D";
    } else {
      num -= 100;
      output += "C";
    }
  }

  while (num < 100 && num >= 10) {
    console.log("2");
    if (num >= 90 && num < 100) {
      num -= 90;
      output += "XC";
    } else if (num >= 40 && num < 50) {
      num -= 40;
      output += "XL";
    } else if (num >= 50) {
      num -= 50;
      output += "L";
    } else {
      num -= 10;
      output += "X";
    }
  }

  while (num < 10 && num > 0) {
    console.log("3");
    if (9 === num) {
      num -= 9;
      output += "IX";
    } else if (4 === num) {
      num -= 4;
      output += "IV";
    } else if (num >= 5) {
      num -= 5;
      output += "V";
    } else {
      num -= 1;
      output += "I";
    }
  }
  return output;
};
