
function power(base, exponent) {
    if (exponent <= 0) return 1;
    return base *= power(base, --exponent);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(3, 7)); // 2187
console.log(power(3, 8)); // 6561
