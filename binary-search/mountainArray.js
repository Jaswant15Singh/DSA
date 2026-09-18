const mountainArray=(arr)=>{
let left=0;
let right=arr.length-1;
let idx=null;
for(let i=0;i<arr.length;i++){
    
    if (arr[i + 1] < arr[i]) {
      idx = i;
      break;
    }
}
return idx

// while(left<right){
//     if(left>right){
//         return arr[index]
//     }
//     let mid = Math.floor((left + (right - left)) / 2);
//     if(arr[mid]>=arr[index]){
//         right=mid-1;
//     }
// }
// return index
}
console.log(mountainArray([0, 1, 2, 3, 6, 9, 4, 1, 0]));
console.log(mountainArray([0, 10, 5, 2]));
console.log(mountainArray([0, 2, 1, 0]));
console.log(mountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));


