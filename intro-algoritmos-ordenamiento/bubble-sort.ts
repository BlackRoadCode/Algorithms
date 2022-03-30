( () => {

    const setDatos:number[] = [ 10, 6, 3, 4, 5, 2, 1, 12, 20, 7 ];
    const setDatos2:number[] = [ 10, 6, 3, 4, 5, 2, 1, 12, 20, 7 ];

    const bubbleSortAsc = ( data:number[] ):number[] => {
        for( let i = 0; i < data.length; i++ ){
            
            let count:number = 0;
            
            for( let j = 0; j < data.length - i; j++ ){
                if( data[j] > data[j+1] ){

                    count++;

                    let temp1 = data[j];
                    let temp2 = data[j+1];
        
                    data[j+1] = temp1;
                    data[j] = temp2;
                }
            }

            if( count <= 0 ){ break; }
        }

        return data;
    };
    
    const bubbleSortDesc = ( data:number[] ):number[] => {
        for( let i = 0; i < data.length; i++ ){

            let count:number = 0;

            for( let j = 0; j < data.length - 1; j++ ){
                if( data[j] < data[j+1] ){

                    count++;

                    let temp1 = data[j];
                    let temp2 = data[j+1];

                    data[j+1] = temp1;
                    data[j] = temp2;
                }
            }

            if( count <= 0 ){ break; }
        }

        return data;
    };

    console.log( bubbleSortAsc(setDatos) );
    console.log( bubbleSortDesc(setDatos2) );

})();