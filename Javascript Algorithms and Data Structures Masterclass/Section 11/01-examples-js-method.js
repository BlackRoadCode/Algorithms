
let result = [ 'Steele', 'Colt', 'Data Structures', 'Algorithms' ].sort();
let result2 = [6,4,15,10] .sort();

function numberCompare( num1, num2 ){
    return num1 - num2;
}

let result3 = [6,4,15,10] .sort( numberCompare );


console.log(result3);