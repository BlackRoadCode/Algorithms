function logAtLeastFive( n ){
    for (let i = 1; i <= Math.max( 5, n ); i++) {
        console.log( i );
    }
}

function logAtMostFive( n ){
    for (let i = 1; i <= Math.min( 5, n ); i++) {
        console.log( i );
    }
}

logAtLeastFive(9);
logAtMostFive(10);