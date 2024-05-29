/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length;
     let i= 0;
    let j = n-1;
    // swapping
    while(i<=j){
        let temp =s[i];
        s[i]=s[j];
        s[j]=temp;
    i++;
    j--;
    }
    return s;
}; 

let s = "hellow".split('');
console.log(s);
let result=reverseString(s);
console.log(result);
console.log(s);