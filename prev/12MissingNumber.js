const missingNumber=(arr,n)=>{
let sum=0;
let expected=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
for(let j=1;j<=n;j++){
    expected+=j
}
return expected-sum
}

console.log(missingNumber([1,3,4,5,6],6));
