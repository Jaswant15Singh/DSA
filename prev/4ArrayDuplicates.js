const arrayDuplicates = (arr) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];

    map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
  }
  const duplicates = Object.entries(map)
    .filter(([key, val]) => {
      if (val > 1) {
        return key;
      }
    })
    .map(([key, val]) => {
      return Number(key);
    });
  return duplicates;
};

console.log(arrayDuplicates([0, 4, 2, 1, 6, 4, 3, 6, 7, 2]));
