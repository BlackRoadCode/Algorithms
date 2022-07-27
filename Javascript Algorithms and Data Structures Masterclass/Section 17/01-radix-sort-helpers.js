function getDigit(num, i) {
    return Math.floor( Math.abs(num) / Math.pow(10, i) ) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor( Math.log10( Math.abs(num) ) ) + 1;
}

function mostDigits(arr) {
    
    let maxDigits = 0;
    for( let i = 0 ; i < arr.length ; i++ ){
        maxDigits = Math.max( maxDigits, digitCount( arr[i] ) );
    }
    
    return maxDigits;
}

// console.log( getDigit( 12345, 0 ) );
// console.log( getDigit( 12345, 1 ) );
// console.log( getDigit( 12345, 2 ) );

// console.log( digitCount(21356) );
// console.log( digitCount(25) );
// console.log( digitCount(314) );

console.log(mostDigits([1234, 56, 7])); // 4
console.log(mostDigits([1, 1, 11111, 1])); // 5
console.log(mostDigits([12, 34, 56, 78])); // 2