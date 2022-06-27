
function isPalindrome( str ){

    let reverseStr = '';

    function helper(helperInput) {
        if( helperInput.length == 1 ) return helperInput;
	    return helper( helperInput.slice(1) ) + helperInput[0];
    }

    reverseStr = helper(str);

    return ( reverseStr == str ) ? true : false;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('anitalavalatina')); // false
