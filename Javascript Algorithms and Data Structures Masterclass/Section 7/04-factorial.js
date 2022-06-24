
// Función iterativa
// function factorial( base ){
//     let result = 1;

//     for (let i = base; i > 1; i--) {
//         result *= i;
//     }

//     return result;
// }

function factorial( num ){
    if( num == 1 ) return 1;
    return num * factorial( num - 1 );
}

console.log(factorial( 6 ));