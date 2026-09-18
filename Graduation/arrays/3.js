const reverserInPlace=(arr)=>{
let left=0;
let right=arr.length-1;
while(left<right){
    [arr[left],arr[right]]=[arr[right],arr[left]];
    left++;
    right--
}
return arr
}

console.log(reverserInPlace([1,2,3,4,5]));
console.log(reverserInPlace([-1,0,0,3,1,12]));
console.log(reverserInPlace([3,56,13,9,12]));


