
// function selectionSort(arr) {
    
//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;

//         for (let j = i+1; j < arr.length; j++) {

//             if ( arr[j] < arr[lowest] ) {
//                 lowest = j;
//             }

//         }

//         if( i !== lowest ) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];

//     }

//     return arr;

// }

// ES2015 sintaxis
function selectionSort(arr) {

    const swap = ( arr, idx1, idx2 ) =>
    ( [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ] );
    
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i+1; j < arr.length; j++) {

            if ( arr[lowest] > arr[j] ) {
                lowest = j;
            }

        }

        if( i !== lowest ) swap( arr, i, lowest );

    }

    return arr;

}

console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(selectionSort([34, 22, 10, 19, 17]));