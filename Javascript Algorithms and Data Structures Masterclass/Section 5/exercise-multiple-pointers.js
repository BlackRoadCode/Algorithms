function countUniqueValues(arr) {
    let point1 = 0;
    let point2 = 1;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[point1] === arr[point2]) {
            point1++;
            point2++;
        } else {
            point1++;
            point2++;
            counter++;
        }

    }
    return counter;
}


console.log(countUniqueValues([1, 1, 1, 1, 2, 2]));
console.log(countUniqueValues([1, 2, 3, 444, 77, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));