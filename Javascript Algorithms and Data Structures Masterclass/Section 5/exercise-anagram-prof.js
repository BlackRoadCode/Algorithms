
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    let lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero thern it's not an anagram

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;

}

// test cases
// console.log(validAnagram('', ''));
console.log(validAnagram('anagram', 'nagaram'));
// console.log(validAnagram('rat', 'car'));
// console.log(validAnagram('awesome', 'awesom'));
// console.log(validAnagram('qwerty', 'qeywrt'));