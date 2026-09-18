const secondSmallest=(arr)=>{
if(arr.length<2){
    return "invalid"
}
let smallest=Infinity;
let secondSmallest=Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        secondSmallest = smallest;
        smallest=arr[i];
    }
    if(arr[i]>smallest && arr[i]<secondSmallest){
        secondSmallest=arr[i]
    }
}
return secondSmallest
}
console.log(secondSmallest([1,2,3,4,5,6,7]));
console.log(secondSmallest([2,4,0,-1,-22,23,3]));
console.log(secondSmallest([-10,-8,-4,2,0]));


