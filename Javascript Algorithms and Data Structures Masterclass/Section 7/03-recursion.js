function sumRange( num ){
    if( num == 1 ) return 1;
    return num + sumRange( num - 1 );
}

console.log(sumRange(10));

// Ejemplo de funcionamiento
// sumRange( 4 )
//     return 4 + sumRange( 3 )
//                     return 3 + sumRange( 2 )
//                                     return 2 + sumRange( 1 )
//                                                     return 1;
                                                
//                                                 devuelve 1
//                                 devuelve 3
//                 devuelve 6
// devuelve 10