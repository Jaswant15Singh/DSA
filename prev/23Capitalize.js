const capitalizeWord=(str)=>{
let newStr='';
let newWord=true;
for(let i=0;i<str.length;i++){
    if(str[i]===' '){
        newStr+=' ';
        newWord=true;
    }
    else if(newWord){
        newStr+=str[i].toUpperCase();
        newWord=false;
    }
    else{
        newStr+=str[i].toLowerCase();
    }
}
return newStr;
}
console.log(capitalizeWord('hello world today'));
