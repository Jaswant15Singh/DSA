const majorityElement=(arr)=>{
let candidate=null;
let count=0;
for(let i=0;i<arr.length;i++){
    if(count===0){
        candidate=arr[i];
        count++
    }
    else if(arr[i]===candidate){
        count++
    }
    else{
        count--
    }
}
return candidate
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2,2,1,1,1,2,2]));

