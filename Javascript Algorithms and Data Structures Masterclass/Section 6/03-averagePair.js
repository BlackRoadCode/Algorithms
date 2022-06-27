
// Not functioning yet
function averagePair(arr, prom) {

    if(arr.length === 0) return false;

    let i = 0;

    for ( let j = 1; j < arr.length; j++ ){

        console.log((arr[i] + arr[j]) / 2);
        console.log(prom);

        if( (arr[i] + arr[j]) / 2 == prom ){
            return true;
        } else {
            i++;
        }
    }

    return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
console.log( averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false