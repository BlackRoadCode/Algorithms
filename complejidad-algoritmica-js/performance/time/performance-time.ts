( () => {

    const performanceTime = ( n:number ) => {
        for( let i = 0 ; i < n; i++ ){
            console.log(i);
        }
    };

    console.time('duracion-del-algoritmo-contar');
    performanceTime(10000);
    console.timeEnd('duracion-del-algoritmo-contar');

})();