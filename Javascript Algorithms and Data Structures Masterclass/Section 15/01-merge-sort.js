
function merge(arr1, arr2) {

    let arr = [];

    let i = 0;
    let j = 0;
    let loopCicles = 0;
    let loopCiclesTotal = (arr1.length + arr2.length) - 1;

    while (loopCicles <= loopCiclesTotal ) {
        if ( arr1[i] < arr2[j] ) {
            arr.push( arr1[i] );
            i++;
        } else {
            arr.push( arr2[j] );
            j++;
        }

        loopCicles++;
    }

    return arr;

}

console.log(merge([1, 3], [2]));
