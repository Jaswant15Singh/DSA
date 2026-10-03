const peakElement=(arr)=>{
 let left = 0,
   right = arr.length - 1;
 while (left < right) {
   const mid = left + Math.floor((right - left) / 2);
   if (arr[mid] < arr[mid + 1]) {
     left = mid + 1;
   } else {
     right = mid;
   }
 }
 return left;
}

console.log(peakElement([1,25,5,2,6,12,34,2]));
console.log(peakElement([1,2,3,2,1,2,3,4,1,2,13,4]));

