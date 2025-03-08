function reverseNumbers(num) { 
     const  reversed = num.toString().split('').reverse().join('');    
    return parseInt (reversed) * Math.sign(num) ;
}

let n = reverseNumbers(123) ;
console.log(n);


