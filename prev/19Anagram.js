const anagram=(str1,str2)=>{
const obj1={};
const obj2={};
if(str1.length!=str2.length)return false;
for(let i=0;i<str1.length;i++){
    obj1[str1[i]]=obj1[str1[i]]?obj1[str1[i]]+1:1
}

for (let i = 0; i < str2.length; i++) {
  obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
}

// for(let i=0;i<obj1.length;i++){
//     console.log(obj1[i]);
    
// }
let flag=true
Object.entries(obj1).forEach(([key,value])=>{
    console.log(obj1[key],obj2[key]);
    
    if(obj1[key]!=obj2[key]){
        
        flag=false
    }
})
return  flag?true:false

}
console.log(anagram("llsten", "silent"));
