
  var pivotIndex = function (nums) {
    let arr = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      arr.push(sum);
    }

    for (let i = 0; i < arr.length; i++) {
      let leftSum = i === 0 ? 0 : arr[i - 1];
      let rightSum = arr[arr.length - 1] - arr[i];

      if (leftSum === rightSum) {
        return i;
      }
    }

    return -1;
  };

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
