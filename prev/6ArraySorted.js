const sortedArray=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}
console.log(sortedArray([11,22,33,44,55,66]));
