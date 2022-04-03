
 const performanceTime = ( n:number ) => {
    for( let i = 0 ; i < n; i++ ){
        console.log(i);
    }
};

const repeat = (n:number[]) => {
    let repeated_array = n;
    return repeated_array;
};

const convertToString = (n:number[]):string[] => {
    let string_array: string[] = [];

    n.forEach( element => {
        string_array.push( element.toString() );
    });

    return string_array;
};

const twoDimentions = (value:number) => {
    let x  = new Array(value);

    for (let i = 0; i < value; i++) {
        x[i] = new Array(value).fill(0);
    }

    return x;
    
};

// console.log( convertToString( [5, 2,4,7,9,6,25,63] ) );
console.log( twoDimentions( 5 ) );

