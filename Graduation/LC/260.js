var singleNumber = function (nums) {
let count={};
let arr=[]
for(let i=0;i<nums.length;i++){
    count[nums[i]]=count[nums[i]]?count[nums[i]]+1:1
}
let data=Object.entries(count).forEach((data)=>{
    
    if(data[1]<2){
        arr.push(Number(data[0]));
    }
})
return arr

};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));


