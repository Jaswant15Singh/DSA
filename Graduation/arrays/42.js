var rearrangeArray = function (nums) {
let arr=[];
let p=0;
let n=1;
let i=0;
while(i<nums.length){
    
    if(nums[i]>=0){
    arr[p]=nums[i];
    p+=2
    }
    else{
     arr[n]=nums[i];
     n+=2   
    }
    i++;
}
return arr
}

console.log(rearrangeArray([3, 1, 2,4, -5, -2, -4,-6]));
console.log(rearrangeArray([-1, 1]));
console.log(rearrangeArray([-12,2,3,4,6,-1,-4,-5]));


