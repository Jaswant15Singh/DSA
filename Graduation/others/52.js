var isPalindrome = function (s) {
    let l=0;
    let r=s.length-1;
    let status=true;
    let newStr=s.toLowerCase()
    while(l<=r){
        
        if(newStr[l].charCodeAt()>=123 || newStr[l].charCodeAt()<=96 ){
            
            if(newStr[l].charCodeAt()<48 || newStr[l].charCodeAt()>57){
            l++;
            continue
            }
        }
         if(newStr[r].charCodeAt()>=123 || newStr[r].charCodeAt()<=96){
            if(newStr[r].charCodeAt()<48 || newStr[r].charCodeAt()>57){
            r--;
            continue
            }
        }        

        
        if (newStr[l] !== newStr[r]) {
          return false;
        }
        l++;
        r--
    }
    return true
};

console.log(isPalindrome("n0iti,0 n"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));

