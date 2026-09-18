const isSorted=(arr)=>{
let isSorted=false;
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        return false
    }
}
return true;
}

console.log(isSorted([1,2,4,5,6]));
console.log(isSorted([1, 2, 4, 5, 6,1]));
console.log(isSorted([1,2,4,6,6]));
console.log(isSorted([-2,-12,0,0,0,0]));


