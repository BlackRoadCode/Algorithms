
function selectionSort( arr ){

    let min = arr[0];
    let swap = false;

    for (let i = 0; i < arr.length; i++) {
        
        for ( let j = i + 1; j < arr.length; j++ ){ 

            if( arr[j] < min ){
                min = arr[j];
                swap = true;
            }

        }
        
        if( swap )  [ arr[i], min ] = [ min, arr[i] ]
        
    }
    
    return arr;

}


console.log( selectionSort( [ 8, 1, 2, 3, 4, 5, 6, 7 ] ) );


// Podemos reutilizar la lógica del intercambio que usamos en el algoritmo anterior.
// 1. Almacenar el primer elemento como el valor más pequeño que has visto de momento. (en el primer elemento del array ya que no hemos visto nada más)
// 2. Comparar este elemento con el primer item que tenga al lado hasta encontrar un número más pequeño.
// 3. Si es encontrado un número más pequeño, designar ese número para ser el nuevo “mínimo” y continuar hasta el final del array.
// 4. Sí el índice del mínimo no es el mismo con el que inicialmente iniciaste a comparar, entonces intercambiar esos dos valores.
// 5. Repetir esto con el siguiente elemento hasta que el array esté ordenado.