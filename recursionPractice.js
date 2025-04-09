// Calculate n! using recursion.

// Example: factorial(5) → 120

const factorial = (n) => {
    if(n < 2) return 1;
    return n * factorial(n - 1);
}
// console.log(factorial(5));

var myPow = function(x, n) {
    if(n === 0) return 1;
    return myPow(x, n - 1) * x;
};

// console.log(myPow(2, 3));

// Multiply all digits of a number.

// Example: productDigits(123) → 6

const productDigits = (n) => {
    if(n % 10 === n) return n;
    return (n % 10) * productDigits(Math.floor(n / 10));
}
// console.log(productDigits(123));

// Count the number of zeros in a number.

// Example: countZeros(102030) → 3

const countZeros = (n, c = 0) => {
    if(n === 0) return c;
    if(n % 10 === 0) {
        return countZeros(Math.floor(n / 10), c + 1);
    } else {
        return countZeros(Math.floor(n / 10), c);
    }
}

console.log(countZeros(102030));

