const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
  let result=[];
  for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

    let left = i + 1;
    let right = arr.length - 1;
    while(left<right){
        let sum=arr[i]+arr[left]+arr[right];        
        if(sum===0){
          result.push([arr[i],arr[left],arr[right]])
          while (left < right && arr[left] === arr[left + 1]) {
            left++;
          }

          while (left < right && arr[right] === arr[right - 1]) {
            right--;
          }

          left++;
          right--;
        }
        else if(sum>0){
          right--;
        }
        else{
          left++;
        }
    }
  }
  return result
};

// [-3,-1,0,0,0,1,2,3,3]
// [-4,-1,-1,0,1,2]
console.log(threeSum([-1, 3, -3, 0, 0,0,1, 2,3]));
console.log(threeSum([-1, -2, -1, 0, 2, 4, 2, 1]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

