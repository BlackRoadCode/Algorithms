( () => {

    const setDatos:number[] = [ 10, 6, 3, 4, 5, 2, 1, 12, 20, 7, 31, 90 ];
    const setDatos2:number[] = [ 90, 31, 7, 20, 12, 1, 2, 5, 4, 3, 6, 10 ];

    const selectionSortAsc = ( data:number[] ):number[] => {
        for( let i = 0; i < data.length; i++ ){
            let idx = i;
            let aux = 0;

            for( let j = i + 1; j < data.length; j++ ){
                if( data[idx] > data[j] ){
                    idx = j;
                }
            }

            aux = data[i];
            data[i] = data[idx]
            data[idx] = aux;
        }

        return data;
    };
    
    const selectionSortDesc = ( data:number[] ):number[] => {
        for( let i = 0; i < data.length; i++ ){
            let idx = i;
            let aux = 0;

            for( let j = i + 1; j < data.length; j++ ){
                if( data[idx] < data[j] ){
                    idx = j;
                }
            }
            
            aux = data[i];
            data[i] = data[idx]
            data[idx] = aux;
        }

        return data;
    };

    console.log( selectionSortAsc( setDatos ) );
    console.log( selectionSortDesc( setDatos2 ) );

})();