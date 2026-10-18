var isAnagram = function (s, t) {
let obj1={};
if(t.length!=s.length){
    return false
}
for(let i=0;i<s.length;i++){
    obj1[s[i]]=obj1[s[i]]?obj1[s[i]]+1:1
}

for(let i=0;i<t.length;i++){
    
    if(!obj1[t[i]]){
        return false
    }
    obj1[t[i]]=obj1[t[i]]-1
}
return true
};

console.log(isAnagram("nagaram", "anagram"));
console.log(isAnagram("rat", "car"));


