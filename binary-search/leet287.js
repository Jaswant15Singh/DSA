var findDuplicate = function (arr) {
let map=new Map();
for(let i=0;i<arr.length;i++){
    map.set(arr[i],map.get(arr[i])?map.get(arr[i])+1:1)
}

const data=Array.from(map);
for(let i=0;i<data.length;i++){    
   if(data[i][1]>1){
    return data[i][0]
   }
}
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([3, 3, 3, 3, 3]));


