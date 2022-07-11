
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        
        arr[j + 1] = currentVal;

    }

    return arr;
}


console.log(insertionSort([2, 1, 9, 76, 4, 0, 20, -3]));

// - Iniciamos eligiendo el segundo elemento en el array. (el primer elemento se considera la mitad ordenada del array hasta ese momento)
// - Comparamos el segundo elemento con el primero e intercambiamos si es necesario.
// - Continuar con el siguiente elemento y si está en el orden incorrecto, iterar a través de la porción ordenada. (por ejemplo el lado izquierdo) para ubicar el elemento en el sitio correcto.
// - Repetir hasta que el array esté ordenado.
// - Retornar el array ordenado.