
export function addTwoDigits(n: any): number {
    const nums = n.toString().split('');
    return nums.reduce( (a:string, b:string ) => {
        return parseInt(a) + parseInt(b);
    });
}

export function addTwoDigits2(n: any): number {
    const nums = n.toString().split('');
    return parseInt( nums[0] ) + parseInt( nums[1] );
}

console.log(addTwoDigits(23)); 

/** Nota: La solución optimizada solo funciona correctamente si se le pasa un entero de dos dígitos, sin embargo; la primer solución funciona con enteros de cualquier número de cifras (respetando los límites del tipo de dato), por lo que convendría analizar qué implementación conviene más según las necesidades. */