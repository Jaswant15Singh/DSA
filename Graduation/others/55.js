var frequencySort = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  const data = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  console.log(data);
  let res = "";
  for (let [a, b] of data) {
    res += a.repeat(b);
  }
  return res;
};
console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
