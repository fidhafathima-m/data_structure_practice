// function fibonacci(n) {
//     if(n < 1) return "Please enter a positive integer";
//     let fib = [0, 1];

//     for(let i = 2; i < n; i++) {
//         fib.push(fib[i -1] + fib[i - 2]);
//     }
//     return fib;
// }

// console.log("First 10 fibonacci series: ", fibonacci(0));

// Using recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

let fib = [];
for(let i = 0; i < 10; i++) {
    fib.push(fibonacci(i));
}

console.log("First 10 fibonacci series: ", fib);