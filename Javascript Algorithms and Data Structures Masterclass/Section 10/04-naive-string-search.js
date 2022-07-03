
// My solution (does not work)
function stringSearch(bigStr, smallStr) {

    let counter = 0;

    for ( let i = 0; i < bigStr.length; i++ ) {

        for( let j = 0 ; j < smallStr.length; j++ ){

            if( smallStr[j] !== bigStr[i] ){
                break;
            } else {
                counter++;
                continue
            }

        }        
    }
    
    return counter;
}

// Instructor solution
function naiveSearch( long, short ){
    let count = 0;

    for( var i = 0; i < long.length ; i++ ){
        for( var j = 0 ; j < short.length ; j++ ){
            if( short[j] !== long[ i+j ] ) break;
            if( j === short.length - 1 ) count++;
        }
    }

    return count;
}

console.log(naiveSearch("lorie loled lol", "lol"));
console.log(stringSearch("lorie loled lol", "lol"));