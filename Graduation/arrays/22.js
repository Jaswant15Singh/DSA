const maxArea=(arr)=>{
let maxAreaVal = 0;
let area=0;
let left=0;
let right=arr.length-1;
while(left<right){
    area=Math.min(arr[right],arr[left])*(right-left);    
    maxAreaVal = Math.max(maxAreaVal, area);
    if(arr[left]>arr[right]){
        right--
    }
    else{
        left++;
    }
    
}
return maxAreaVal
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([5,2,5,1,6,9]));
console.log(maxArea([6, 2, 5, 1, 6, 3]));


