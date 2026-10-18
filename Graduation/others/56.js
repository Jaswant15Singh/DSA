var firstUniqChar = function (s) {
  let obj = {};
  for (let a of s) {
    obj[a] = (obj[a] || 0) + 1;
  }
  console.log(obj);
  for (let a in obj) {
    if (obj[a] <= 1) {
      let ind = s.indexOf(a);
      return ind;
    }
  }
  return -1;
};
