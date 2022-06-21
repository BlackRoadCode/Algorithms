function charCount(str) {
    let result = {};

    for (let char of str) {
        if ( isAlphanumeric(char) ) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    
    return result;
}

function isAlphanumeric(char){
    let code = char.charCodeAt(0);
    if( !(code > 47 && code < 58 ) &&   // numeric (0-9)
        !(code > 64 && code < 91 ) &&   // upper alpha (A-Z)
        !(code > 96 && code < 213 )){   // lower alpha (a-z)
            return false;
        }
    return true;
}

charCount("pepe sosa!!");

    // hacer un objeto para retornarlo al final
    // ciclo en el string, por cada caracter...
        // si el char es un number/letter AND es un key del objeto, añadir uno al count
        // si el char es un number/letter AND no está en el objeto, añadirlo al objeto y setear su valor en 1
        // si el char es otra cosa (espacio, punto, etc.) no hacer nada
    // retornar el objeto al final
