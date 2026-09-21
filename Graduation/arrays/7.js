const moveZeroToEnd=(arr)=>{    
let left=0;
for(let i=0;i<arr.length;i++){
 if(arr[i]!==0){
    [arr[left],arr[i]]=[arr[i],arr[left]];
    left++
 }
}

return arr;
}
console.log(moveZeroToEnd([0,0,1,3,5,2,0,0]));
console.log(moveZeroToEnd([0, 3, 1, 0, 0, 2, 0, 0]));
console.log(moveZeroToEnd([3, 1, 5, 3, 0, 2, 2,1]));

