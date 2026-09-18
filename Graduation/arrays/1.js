const secondLargest=(arr)=>{
if(arr.length<2){
    return 'Invalid input'
}
let largest=-Infinity;
let secondLargest=-Infinity;
for(let i=0;i<arr.length;i++){
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    } else if (arr[i] === largest) {
      secondLargest = Math.max(
        secondLargest,
        largest === arr[i] ? arr[i] : secondLargest,
      );
    }

}
return secondLargest
}
console.log(secondLargest([1,2,3,4,5,6,7]));
console.log(secondLargest([2,18,23,3,7,12,0,6,1]));
console.log(secondLargest([29,1,8,0,11,2,,1,2,0,23]));
console.log(secondLargest([5, 5, 5, 3])); // returns 3, should be 5