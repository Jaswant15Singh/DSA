var findMin = function (arr) {
let pivot=0;

let left=0;
let right=arr.length-1;
while(left<=right){
    let mid=Math.floor(left+(right-left)/2);
    if(arr[mid]>arr[mid+1]){
        pivot=mid+1;
        break;
    }
    else if(arr[mid]>arr[mid-1] && arr[mid]<arr[left])
    {
        right=mid-1
    }  
    else if(arr[mid]<arr[mid-1]){
        right=mid-1;
    }
    else{
        left=mid+1
    }

}
return pivot
};
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([12,13,1,2,3,4,5,6,7,8]));
console.log(findMin([2,3,4,5,6,7,8,1]));
console.log(findMin([8,1,2,3,4,5,6,7]));


    


