//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency( numA, numB ) {

    let numAS = numA.toString();
    let numBS = numB.toString();

    let frecuencyCounter1 = {};
    let frecuencyCounter2 = {};

    for( let val of numAS ){
        frecuencyCounter1[val] = ( frecuencyCounter1[val] || 0 ) + 1;
    }
    
    for( let val of numBS ){
        frecuencyCounter2[val] = ( frecuencyCounter2[val] || 0 ) + 1;
    }

    for( let key in frecuencyCounter1 ){
        if( frecuencyCounter1[key] !== frecuencyCounter2[key] ) return false; 
    }

    return true;

}

console.log( sameFrequency( 182, 281 ) ); // true
console.log( sameFrequency( "34", "14" ) ); // false
console.log( sameFrequency( 3589578, 7859385 ) ); // true
console.log( sameFrequency( 22, 222 ) ); // false