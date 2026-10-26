// var findMaxConsecutiveOnes = function (nums) {
//     let max=0;
//     let counter=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===1){
//             counter++
//         }
//         else{
//             counter=0
//         }
//         max=Math.max(max,counter)
//     }
//     return max
// };

var findMaxConsecutiveOnes = function (nums) {
    let l=0;
    let r=0;
    let max=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==1){
            l=i+1;
            r=i+1;
        }
        else {
            r++
        }
        max=Math.max(max, r-l)
    }
    return max
};


console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([0,0,1,1,1,1,0]));

