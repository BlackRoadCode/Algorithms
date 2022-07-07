
function bubbleSort(arr) {
    for (let i = arr.length ; i > 0; i--) {
        for ( let j = 0; j < i-j; j++ ){
            if ( arr[j] > arr[j + 1] ) [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ];
        }
    }
    return arr;
}

function bubbleSortB( arr ){
    for (let i = arr.length ; i > 0; i--) {
        
        for (let j = 0; j < i-1; j++) {

            console.log(arr, arr[j], arr[j+1]);

            if ( arr[j] > arr[j + 1] ) {
                [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ];
            }
        }

        console.log('PASS COMPLETE!');

    }
    return arr;
}

// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// const swap = ( arr, idx1, idx2 ) => {
//     [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
// }

console.log(bubbleSort([12, 5, 3, 21, 2]));
console.log(bubbleSortB([12, 5, 3, 21, 2]));


// 2. Empezar un ciclo desde i en el final del array hacia el principio.
// 3. Iniciar un bucle interno con una variable llamada j que va desde el principio hasta `i-1`.
// 4. Si `arr[j]` es mayor a `arr[j+1]`, intercambiar estos valores, de lo contrario continuar el ciclo.
// 5. Retornar el array ordenado.