var findPeakElement = function (arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1; 
    } else {
      right = mid; 
    }
  }
  return left;
};

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([1, 2, 3, 4, 5, 6]));
console.log(findPeakElement([1, 2, 8, 3, 4, 5, 6]));
console.log(findPeakElement([4, 1, 2]));
console.log(findPeakElement([1]));
console.log(findPeakElement([1, 2]));
