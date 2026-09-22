const frequencyElement = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
   
      map[arr[i]] = map[arr[i]]?map[arr[i]]+1:1;
  }
  const data=Object.entries(map);
  return data
};

console.log(frequencyElement([1, 0, 4, 6, 0]));
console.log(frequencyElement([2, 4, 1, 3, 4, 5]));
console.log(frequencyElement([1, 2, 3, 4, 5, 6, 6, 7, 8]));
