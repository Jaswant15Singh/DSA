const secondMaxElement=(arr)=>{
let max=arr[0];
let secondMax=arr[0];
for(let i=1;i<arr.length;i++){
    
    if(arr[i]>max){
        secondMax=max;
        max=arr[i]
    }
    if(arr[i]>secondMax && arr[i]<max){
        secondMax=arr[i]
    }

}
return secondMax
}
console.log(secondMaxElement([-3, 2, 1, 56, -23]));
