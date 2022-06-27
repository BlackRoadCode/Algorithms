function binarySearch(arr, value) {

    let leftPointer = 0;
    let rigthPointer = arr.length - 1;
    
    while( leftPointer <= rigthPointer ){
        let middlePointer = Math.floor( ( leftPointer + rigthPointer ) / 2 );

        if( arr[middlePointer] < value ){
            leftPointer = middlePointer + 1;
        } else if ( arr[middlePointer] > value ){
            rigthPointer = middlePointer - 1;
        } else {
            return middlePointer;
        }
    }

    return -1;
}

let states = [ "AK - Alaska", "AL - Alabama", "AR - Arkansas", "AS - American Samoa", "AZ - Arizona", "CA - California", "CO - Colorado", "CT - Connecticut", "DC - District of Columbia", "DE - Delaware", "FL - Florida", "GA - Georgia", "GU - Guam", "HI - Hawaii", "IA - Iowa", "ID - Idaho", "IL - Illinois", "IN - Indiana", "KS - Kansas", "KY - Kentucky", "LA - Louisiana", "MA - Massachusetts", "MD - Maryland", "ME - Maine", "MI - Michigan", "MN - Minnesota", "MO - Missouri", "MS - Mississippi", "MT - Montana", "NC - North Carolina", "ND - North Dakota", "NE - Nebraska", "NH - New Hampshire", "NJ - New Jersey", "NM - New Mexico", "NV - Nevada", "NY - New York", "OH - Ohio", "OK - Oklahoma", "OR - Oregon", "PA - Pennsylvania", "PR - Puerto Rico", "RI - Rhode Island", "SC - South Carolina", "SD - South Dakota", "TN - Tennessee", "TX - Texas", "UT - Utah", "VA - Virginia", "VI - Virgin Islands", "VT - Vermont", "WA - Washington", "WI - Wisconsin", "WV - West Virginia", "WY - Wyoming"];

console.log(binarySearch(states, "NM - New Mexico")); // -1
console.log(binarySearch([10, 15, 20, 25, 30], 15)); // 1
console.log(binarySearch([1,3,4,5,10,12,16,20,22,24], 4)); // 5
console.log(binarySearch([100], 100)); // 0
console.log(binarySearch([100], 200)); // -1

