var toLowerCase = function (s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    let ch = s.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      let newVal = String.fromCharCode(ch + 32);
      newStr += newVal;
    } else {
      newStr += s[i];
    }
  }
  return newStr;
};
