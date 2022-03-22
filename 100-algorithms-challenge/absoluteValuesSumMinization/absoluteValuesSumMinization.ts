export function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;
    return isEven ? a[ a.length / 2 -1 ] : a[ Math.floor( a.length / 2 ) ];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

// Using Math.floor()
console.log( Math.floor( 1.5 ) );
console.log( Math.floor( 4.7 ) );
console.log( Math.floor( -2.3 ) );
console.log( Math.floor( -6.4 ) );

// Using Math.round() - error
console.log( Math.round( 1.5 ) );
console.log( Math.round( 4.7 ) );
console.log( Math.round( -2.3 ) );
console.log( Math.round( -6.4 ) );
