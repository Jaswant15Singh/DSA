const binarySearh=(arr,n)=>{
let left=0;
let right=arr.length-1;
while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(arr[mid]===n){
        return mid
    }
    else if(arr[mid]<n){
        left=mid+1
    }
    else{
        right=mid-1
    }
}
}
console.log(binarySearh([1,2,3,4,5,6,7,8],8));
console.log(binarySearh([3,5,7,13,46,122,457,1344],46));
console.log(binarySearh([-1,1,2,3,4], -1));

