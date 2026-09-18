const reverseArrayInPlace=(arr)=>{
let left=0;
let right=arr.length-1;
while(left<right){
    const temp=arr[right];
    arr[right]=arr[left];
    arr[left]=temp;
    left++;
    right--
}
console.log(arr);

}

reverseArrayInPlace([1,2,3,4,5])