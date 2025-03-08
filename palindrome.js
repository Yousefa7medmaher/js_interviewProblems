function Palindrome(str) {
    let _rev_str =  str.split('').reverse().join('') ;
    return str === _rev_str 
}

console.log(Palindrome('goog'));


function __isPalindrome (str) { 
    let left = 0 ;
    let right = str.length -1 ;
    while(left < right )  {
        if(str[left] !== str[right]) { 
            return false ;
        }
        left ++ ;
        right -- ;
    }
    return true; 
}

console.log(__isPalindrome('goog'));
console.log(__isPalindrome('yousef'));
