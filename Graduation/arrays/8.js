const missingNumber=(arr)=>{
let sum=0;
let max=0;
for(let i=0;i<=arr.length;i++){
    max+=i
}
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
return max-sum
}
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0,1,2,3,5,6,7,8,9,10]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));



