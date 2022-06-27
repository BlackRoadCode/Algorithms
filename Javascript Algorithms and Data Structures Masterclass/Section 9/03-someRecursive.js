const isOdd = val => val % 2 !== 0;
const isPair = val => val % 2 === 0;

function someRecursive(arr, callback) {

    let result = [];

    function helper(helperInput, helperCallback) {

        helperCallback = callback;

        if (helperInput.length === 0) return false;

        result.push(helperCallback(helperInput[0]));

        helper(helperInput.slice(1));
    }

    helper(arr, callback);

    if ( result.indexOf(true) !== -1 ) {
        return true;
    } else {
        return false;
    }
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false