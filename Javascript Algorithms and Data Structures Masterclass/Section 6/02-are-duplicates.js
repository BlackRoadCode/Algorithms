

function areThereDuplicates() {
    let argumentsObject = arguments;
    let paramsArray = Object.values(argumentsObject);

    let frecuencies = {};

    for (let val of paramsArray) {
        frecuencies[val] = (frecuencies[val] || 0) + 1;
    }

    for( let value in frecuencies ){
        if(frecuencies[value] > 1){
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));