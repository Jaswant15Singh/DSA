var compress = function (chars) {
let i=0;
let write=0;
while(i< chars.length){
    let current=chars[i];
    let count=0;
    while(current===chars[i]){
        count++;
        i++
    }
    chars[write]=current;
    write++;
    if(count>1){
        const c=String(count);
        for (let j = 0; j < c.length; j++) {
            chars[write]=c[j];
            write++
        }
    }
    
}
return write
};

console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));
console.log(compress(["a"]));

