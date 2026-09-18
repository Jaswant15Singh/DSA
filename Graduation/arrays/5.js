const sumAndAvg=(arr)=>{
let sum=0;
let avg=null;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
avg=sum/arr.length;
return [sum,avg]
}
console.log(sumAndAvg([1,0,4,2,4]));
console.log(sumAndAvg([3,5,1,7,2]));

