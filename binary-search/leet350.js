var intersect = function (nums1, nums2) {
let map=new Map();
let nums1Smaller=nums1.length<nums2.length?true:false;
if(nums1Smaller){
    for(let i=0;i<nums1.length;i++){
        map.set(nums1[i],map.get(nums1[i])?map.get(nums1[i])+1:1)
    }
}
else{
   for (let i = 0; i < nums2.length; i++) {
     map.set(nums2[i], map.get(nums2[i]) ? map.get(nums2[i] )+ 1 : 1)
   }
}
console.log(map);

};
console.log(intersect([1, 2, 2, 1],[2,2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));


