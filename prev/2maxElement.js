const maxArray=(arr)=>{
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
return max
}
console.log(maxArray([-3,5,7,2,1,4,56,34,-23]));
