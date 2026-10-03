const twoSum=(arr,t)=>{
    const map={};
    for(let i=0;i<arr.length;i++){
        let val=t-arr[i];
        if(map[val]){
            return [map[val],i]
        }
        else{
            map[arr[i]]=i
        }
    }
    return map
}
console.log(twoSum([1, 4, 2, 6, 2, 4, 6, 1],6));
console.log(twoSum([1,5,2,5,6],11));

