var findNumbers = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] > 9 && nums[i] < 100) ||
      (nums[i] > 999 && nums[i] < 10000) ||
      nums[i] === 100000
    ) {
      counter++;
    }
  }
  return counter;
};
