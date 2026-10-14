var intersection = function (nums1, nums2) {
  let map = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = map[nums1[i]] ? map[nums1[i]] + 1 : 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      result.push(nums2[i]);
      map[nums2[i]] = 0;
    }
  }
  return result;
};
