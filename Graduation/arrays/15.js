const searchRange=(arr,t)=>{
let left=0;
let right=arr.length-1;
let start=-1;
let end=-1;
while(left<=right){
    let mid=Math.floor(left+(right-left)/2);
    if(arr[mid]===t){
        if(arr[mid-1]===t){
            right=mid-1;
        }
        else{
            start=mid;
            break;
        }
    }
    else if(arr[mid]>t){
        right=mid-1;
    }
    else{
        left=mid+1;
    }
}
left=0;
right=arr.length-1;
while (left <= right) {
  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] === t) {
    if (arr[mid + 1] === t) {
      left = mid + 1;
    } else {
      end = mid;
      break;
    }
  } else if (arr[mid] > t) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

return [start,end]
}

console.log(searchRange([2, 4, 4, 5, 7, 7, 7, 7, 7, 8, 8, 8, 12], 7));
console.log(searchRange([1,2,3,4,4,4,4,5,5,5,5,5,5,5,6,7,8,9,10],4));
console.log(searchRange([1, 2, 3,3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10], 3));
console.log(searchRange([1],1));



