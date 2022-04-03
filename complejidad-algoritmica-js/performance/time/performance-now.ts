( () => {

    // const { PerformanceObserver, performance } = require('perf_hooks');

    const performanceTime = ( n:number ) => {
        for( let i = 0 ; i < n; i++ ){
            console.log(i);
        }
    }

    let init = performance.now();
    performanceTime(10);
    let end = performance.now();

    console.log(`El algoritmo ha durado: ${ end - init }ms.`);

})();