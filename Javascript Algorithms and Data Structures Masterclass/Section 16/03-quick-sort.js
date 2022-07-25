
function pivot( arr, start = 0, end = arr.length - 1 ){
    const swap = ( arr, idx1, idx2 )=>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if( pivot > arr[i] ){
            swapIdx++;
            swap( arr, swapIdx, i );
        }
    }

    swap( arr, start, swapIdx );

    return swapIdx;
}

function quicksort( arr, left = 0, right = arr.length - 1 ){

    if( left < right ){
        let pivotIdx = pivot( arr, left, right );
        // left
        quicksort( arr, left, pivotIdx - 1 );
        // rigth
        quicksort( arr, pivotIdx + 1, right );
    }

    return arr;
}

console.log(quicksort([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(quicksort([5, 2, 1, 8, 4, 7, 6, 3]));


// - Llamar al pivot helper en el array.
// - Cuando el helper retorne el índice del pivote actualizado, recursivamente llamar al pivot helper en el 
//  subarray a la izquierda de ese índice y en el subarray a la derecha del índice.
// El caso base ocurre cuando cuentes con un subarray con menos de dos elementos.