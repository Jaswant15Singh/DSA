const firstAndLastOccurence=(arr,t)=>{
let left=arr.length-1;
let right=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]===t){
        if(i<left){
            left=i
        }
    }
    if(arr[i]===t){
        if(i>right){
            right=i
        }
    }
}
return [left,right]
}

console.log(firstAndLastOccurence([1,2,3,5,1,34,1,4,1,4,6,1],1));
console.log(firstAndLastOccurence([2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,1],1));
console.log(firstAndLastOccurence([1,1,1,2,2,2,2,2,2,2,2,],1));



