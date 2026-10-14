var majorityElement=(arr)=>{
let candidate1=null;
let candidate2=null;
let count1=0;
let count2=0;
for(let i=0;i<arr.length;i++){
    let curr=arr[i]
    // console.log("--", count1, candidate1,count2,candidate2,curr);
     if (curr === candidate1) {
       count1++;
     } else if (curr === candidate2) {
       count2++;
     } else if (count1 === 0) {
       candidate1 = curr;
       count1++;
     } else if (count2 === 0) {
       candidate2 = curr;
       count2++;
     } else {
       count1--;
       count2--;
     }
}
const data=[];
const limit = arr.length / 3;
let total_count1=0;
let total_count2=0;
for(let i=0;i<arr.length;i++){
  let curr=arr[i];
  if(curr===candidate1){
    total_count1++
  }
  if(curr===candidate2){

    total_count2++
  }
}
if(total_count1>limit)data.push(candidate1);
if(total_count2>limit)data.push(candidate2)

console.log(total_count1,candidate1,limit);
console.log(total_count2,candidate2);

return data
}
console.log(majorityElement([2, 1, 1, 3, 1, 4, 5, 6]));
console.log(majorityElement([2, 4, 5, 6, 7, 3, 23, 1, 1, 1, 1]));


// console.log(
//   majorityElement([
//     1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2,2,2,2,2,3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
//     3, 3,
//   ]),
// );
// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([1, 2]));


