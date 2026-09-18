const countVowels=(str)=>{
    const vowels={
        a:'a',
        e:'e',
        i:"i",
        o:'o',
        u:'u'
    }
    let count=0;


    for(let i=0;i<str.length;i++){
        if(vowels[str[i]]){
            count++
        }
    }
    return count
}

console.log(countVowels('jaswant'));
