
function recursiveRange(num) {
    let result = 0;

    function helper(helperInput) {
        if (helperInput === 0) return;

        result += helperInput;
        helper(--helperInput);
    }

    helper(num);
    return result;
}

// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21  - 6 + 5 + 4 + 3 + 2 + 1
console.log(recursiveRange(10)); // 55 
console.log(recursiveRange(20)); // 210 