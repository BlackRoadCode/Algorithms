
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
console.log(quicksort([4,6,9,1,2,5]));
console.log(quicksort([1,2,3,4,5,6,7,8,9])); // worst case