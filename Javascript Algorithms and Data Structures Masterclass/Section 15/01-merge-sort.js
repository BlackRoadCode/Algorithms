
function merge(arr1, arr2) {

    let arr = [];

    let i = 0;
    let j = 0;
    let loopCicles = 0;
    let loopCiclesTotal = (arr1.length + arr2.length) - 1;

    while (loopCicles <= loopCiclesTotal) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }

        loopCicles++;
    }

    return arr;

}


function merge2(arr1, arr2) {
    let i = 0;
    let j = 0;
    let ansArr = []
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] <= arr2[j] || j >= arr2.length) {
            ansArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j] || i >= arr1.length) {
            ansArr.push(arr2[j]);
            j++;
        }
    }
    return ansArr;
}

function merge3(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    result = result.concat(arr2.slice(j), arr1.slice(i));
    return result;
}

console.log(merge([1, 3], [2]));
console.log(merge([1, 3, 5], [2]));
console.log(merge([1, 3, 5], []));

console.log(merge2([1, 3], [2]));
console.log(merge2([1, 3, 5], [2]));
console.log(merge2([1, 3, 5], []));

console.log(merge3([1, 3], [2]));
console.log(merge3([1, 3, 5], [2]));
console.log(merge3([1, 3, 5], []));
