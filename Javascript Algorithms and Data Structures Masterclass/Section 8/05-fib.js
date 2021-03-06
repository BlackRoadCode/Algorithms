
function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3          - 1,1,2
console.log(fib(6)); // 8        - 1,1,2,3,5,8
console.log(fib(10)); // 55        - 1,1,2,3,5,8,13,21,34,55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
