
function addUpTo( n ){

    let total = 0;

    for ( let i = 1; i <= n; i++ ){

        total += i

    }

    return total;

}

function addUpToB(n){
    return n * ( n + 1 ) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log( `Tiempo transcurrido: ${ t2 - t1 } / 1000 segundos.` );

let t3 = performance.now();
addUpToB(1000000000);
let t4 = performance.now();
console.log( `Tiempo transcurrido: ${ t4 - t3 } / 1000 segundos.` );
