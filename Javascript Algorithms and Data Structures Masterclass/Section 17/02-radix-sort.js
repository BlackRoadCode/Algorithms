function getDigit(num, i) {
    return Math.floor( Math.abs(num) / Math.pow(10, i) ) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor( Math.log10( Math.abs(num) ) ) + 1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for( let i = 0 ; i < arr.length ; i++ ){
        maxDigits = Math.max( maxDigits, digitCount( arr[i] ) );
    }
    return maxDigits;
}

function radixSort( arr ){

    let maxDigits = mostDigits(arr);

    for (let i = 0; i < maxDigits; i++) {
        
        let buckets = [];

        for (let j = 0; j < arr.length; j++) {
            
            if( getDigit( arr[j], j ) == 0 ){
                buckets.splice( j, 0, arr[j] );
                console.log(buckets);
                arr = buckets;
            }
            
        }
        
    }

    return arr;

}

console.log( radixSort( [ 5, 23, 4, 12, 890, 1111 ] ) );

// - Define una función que acepte una lista de números.
// - Averigua cuántos dígitos tiene el número más grande.
// - Hacer un ciclo desde k = 0 hasta el número más grande de dígitos.
// - Por cada iteración del ciclo:
//     - Crear cubos para cada dígito (0 a 9)
//     - Coloca cada número en el cubo correspondiente basado en su kth dígito.
// - Reemplaza el array existente con los valores de los cubos, empezando con 0 para ir hasta 9.
// - Retornar el nuevo array al final.