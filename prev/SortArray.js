const sortArray=(arr)=>{
let left=0;
let right=arr.length-1;
let newArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        newArr[right]=Math.pow(arr[i],2);
        right--
    }
    else{
        newArr[left] = Math.pow(arr[i], 2);
        left++
    }

}
return newArr
}

console.log(sortArray([-4,-1,1,1,2,5]));
