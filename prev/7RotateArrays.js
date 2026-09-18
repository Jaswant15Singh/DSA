const rotateArray=(arr,n)=>{
const k=n%arr.length;
const length=arr.length -k;
return [...arr.slice(k,arr.length),...arr.slice(0,k)]
}

console.log(rotateArray([1,2,3,4,5,6],2));
