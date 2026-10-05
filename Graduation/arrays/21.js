const minSubArrayLen = (arr, k) => {
  let minLength = Infinity;
  let sum = arr[0];
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    sum += arr[right];

    if (sum < k) {
      right++;
    } else if (sum >= k) {
      while (sum >= k) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= arr[left];
        left++;
      }

      right++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};


console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([1, 4, 4], 4));
console.log(minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11));
