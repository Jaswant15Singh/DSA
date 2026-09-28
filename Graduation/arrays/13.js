const findRotatedArray=(arr,t)=>{
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]===t){
            return mid;
        }
       
        if(arr[left]<= arr[mid]){
            if(arr[left]<=t && arr[mid]>t){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        else{
            if(arr[mid]< t && arr[right]>t){
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
    }
}



console.log(findRotatedArray([4,5,6,7,8,1,2,3],3));
console.log(findRotatedArray([8, 1, 2, 3,4,5,6,7], 1));
console.log(findRotatedArray([3,4, 5, 6, 7, 1, 2,], 2));
console.log(findRotatedArray([3, 4, 5, 6, 7, 1, 2], 1));



