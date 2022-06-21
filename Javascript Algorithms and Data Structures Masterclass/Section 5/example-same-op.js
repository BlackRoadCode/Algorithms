function same( arr1, arr2 ){

    if(arr1.length !== arr2.length){
        return false;
    }

    let frecuencyCounter1 = {};
    let frecuencyCounter2 = {};

    for( let val of arr1 ){
        frecuencyCounter1[val] = ( frecuencyCounter1[val] || 0 ) + 1;
    }
    
    for( let val of arr2 ){
        frecuencyCounter2[val] = ( frecuencyCounter2[val] || 0 ) + 1;
    }

    for( let key in frecuencyCounter1 ){
        if( !( key ** 2 in frecuencyCounter2 ) ){
            return false;
        }

        if( frecuencyCounter2[ key ** 2 ] !== frecuencyCounter1[key] ){
            return false;
        }
    }

    
    return true;

}

console.log(same( [1,2,3,2,5], [4,1,9,4,11] )); // true
// console.log(same( [1,2,3], [1,9] )); //) false
// console.log(same( [1,2,1], [4,4,1] )); // false (same frecuency)