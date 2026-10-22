var threeSumClosest = function (nums, target) {
let sum;
let diff=nums[0]+nums[1]+nums[2];

nums.sort((a,b)=>a-b);
for(let i=0;i<nums.length-2;i++){
    let left=i+1;
    let right=nums.length-1;
    while(left<right){
        sum=nums[i]+nums[left]+nums[right];
        if (Math.abs(target - sum) < Math.abs(target - diff)) {
          diff = sum;
        }
        if(sum===target){
            return sum
        }
        else if(sum<target){
            left++
        }
        else{
            right --
        }
    }
}
return diff
};

console.log(threeSumClosest([-1, 2, 1, -4,2,4,0],1));
console.log(threeSumClosest([0,0,0],1));

