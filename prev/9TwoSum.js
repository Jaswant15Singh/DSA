const twoSum=(arr,n)=>{
const nums=new Map();
for(let i=0;i<arr.length;i++){
    const data=n-arr[i]
    const isCheck=nums.has(data);    
    if(isCheck){        
        return [nums.get(data),arr[i]]
    } 
  
        nums.set(arr[i],arr[i])
    console.log(nums);
    
}

}
console.log(twoSum([8,3,4,1,5,7,2],9));
