const duplicateNumber=(arr)=>{
    let map={};
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]){
            return arr[i]
        }
        else{
            map[arr[i]]=1
        }
    }
}

console.log(duplicateNumber([1,0,4,6,0]));
console.log(duplicateNumber([2,4,1,3,4,5]));
console.log(duplicateNumber([1,2,3,4,5,6,6,7,8]));



