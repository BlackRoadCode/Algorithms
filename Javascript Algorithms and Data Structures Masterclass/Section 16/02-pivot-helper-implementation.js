

// function pivot(arr, start = 0, end = arr.length - 1) {

//     function swap(array, i, j) {
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }

//     var pivot = arr[start];
//     var swapIdx = start;

//     for (let i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, swapIdx, i);
//         }
//     }

//     swap(arr, start, swapIdx);
//     return swapIdx;

// }

// es15 version
function pivot(arr, start = 0, end = arr.length - 1){
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

    console.log( arr );

    return swapIdx;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3], 0));
console.log(pivot([28,41,4,11,16,1,40,14,36,37,42,18], 0));