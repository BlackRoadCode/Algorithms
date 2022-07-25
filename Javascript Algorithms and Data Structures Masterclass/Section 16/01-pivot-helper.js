
function pivot(arr, startIdx = 0, endIdx = arr.length + 1) {

    let pivot = startIdx;
    let pivotIdx = pivot;

    for (let i = 1; i < arr.length; i++) {

        if (arr[pivot] > arr[i]) {
            pivotIdx++;
            [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        }

    }

    [arr[pivot], arr[pivot + pivotIdx]] = [arr[pivot + pivotIdx], arr[pivot]];

    console.log( arr );

    return pivotIdx;
}

// console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3], 0));
console.log(pivot([28,41,4,11,16,1,40,14,36,37,42,18], 0));