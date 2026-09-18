const MajorityElement = (nums) => {
    const count = new Map();
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
            count.set(num,count.get(num)?count.get(num)+1:1)
        
    }
    for(let [key,value] of count){
        if(value>nums.length/2){
            return key
        }
    }
}

console.log(MajorityElement([2,2,1,1,1,2,2]));
