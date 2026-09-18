const firstNonRepeatingCharacter=(str1)=>{
let map=new Map();
for(let i=0;i<str1.length;i++){
    map[str1[i]]=map[str1[i]]?map[str1[i]]+1:1;
}

for(let i=0;i<str1.length;i++){
    if(map[str1[i]]===1)return str1[i]
}
}
console.log(firstNonRepeatingCharacter('heello'));
