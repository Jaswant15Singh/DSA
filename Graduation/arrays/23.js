const sortColors=(arr)=>{
let left=0;
let right=arr.length-1;
let curr=0;
for(let i=0;i<arr.length;i++){
    if(arr[curr]===0){
    [arr[left],arr[curr]]=[arr[curr],arr[left]];
    left++;
    curr++;
    }
    else if(arr[curr]===2){
        [arr[right],arr[curr]]=[arr[curr],arr[right]];
        right--;
    }
    else{
     curr++;
    }    
}
return arr
}

console.log(sortColors([1,2,0,2]));

console.log(sortColors([1,0,1,2,2,1,0,2,1,0,0,2,1,2,0]));
console.log(sortColors([0,0,1,2,0,2,1,1,2,0,0,1,2]));

