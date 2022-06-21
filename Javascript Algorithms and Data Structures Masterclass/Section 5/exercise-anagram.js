
function validAnagram( str1, str2 ){
    if(str1.length !== str2.length){
        return false;
    }

    let frecuencyCounter1 = {};
    let frecuencyCounter2 = {};

    for( let char of str1 ){
        frecuencyCounter1[char] = ( frecuencyCounter1[char] || 0 ) + 1;
    }
    
    for( let char of str2 ){
        frecuencyCounter2[char] = ( frecuencyCounter2[char] || 0 ) + 1;
    }

    for( let key in frecuencyCounter1 ){
        if( !( key in frecuencyCounter2 ) ){
            return false;
        }

        if( frecuencyCounter2[ key ] !== frecuencyCounter1[key] ){
            return false;
        }
    }

    return true;

}

// test cases
console.log(validAnagram('', ''));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));