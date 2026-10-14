var merge = function (intervals) {
const sortedData= mergeSort(intervals)

let result=[];
for(let i=0;i<sortedData.length;i++){
    let curr=sortedData[i];
    if(result.length===0 || curr[0]>result[result.length-1][1]){
        result.push(curr)
    }
    else{
        let last=result[result.length-1];
        last[1]=Math.max(curr[1],last[1])
        
    }
}
return result

  function sort(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {   
      if (left[i][0] <= right[j][0]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      result.push(left[i]);
      i++;
    }

    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
  };




  function mergeSort(arr){
    if (arr.length<=1) {
      return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    for (let i = 0; i < middle; i++) {
      left.push(arr[i]);
    }

    for (let i = middle; i < arr.length; i++) {
      right.push(arr[i]);
    }
    
   let a = mergeSort(left);
   let b = mergeSort(right);
    
    return sort(a, b);
  };
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
);

console.log(
  merge([
    [4, 7],
    [1, 4],
  ]),
);
