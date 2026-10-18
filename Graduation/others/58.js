var reverseWords = function (s) {
const a=s.split(' ');
const arr=[];
for(i=a.length-1;i>=0;i--){
if(!a[i]==""){
    arr.push(a[i])
}
}
return arr.join(" ")
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));


