// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacci(n) {

    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));