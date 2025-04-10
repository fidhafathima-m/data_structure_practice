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

// console.log(countZeros(102030));

// Count consonants (non-vowels) in a string.

// Example: countConsonants("hello") → 3

function consonants(str) {
    const vowels = 'aeiouAEIOU';
    function countConsonants(s, count = 0) {
        if(s === "") return count;
        if(!vowels.includes(s[0])) {
            return countConsonants(s.slice(1), count + 1);
        }
        return countConsonants(s.slice(1), count)
    }
    return countConsonants(str);
}

// console.log(consonants("hellllllooooo"));

// Count vowels (a, e, i, o, u) in a string.

// Example: countVowels("hello") → 2

function vowelsCount(s) {
    const vowels = 'aeiouAEIOU'
    function countVowels(str, count = 0) {
        if( str === "") return count;
        if(vowels.includes(str[0])) {
            return countVowels(str.slice(1), count + 1);
        }
        return countVowels(str.slice(1), count);
    }
    return countVowels(s);
}

// console.log(vowelsCount("hello"));

// Remove all vowels from a string.

// Example: removeVowels("hello") → "hll"

function vowelsRemove(str) {
    const vowels = 'aeiouAEIOU';
    function removeVowels(s) {
        if(s === "") return s;
        if(vowels.includes(s[0])) {
            return removeVowels(s.slice(1));
        }
        return s[0] + removeVowels(s.slice(1))
    }
    return removeVowels(str);
}

// console.log(vowelsRemove("hello"));




// sumArray([1, 2, 3]) → 6
const sumArray = arr => {
    if(arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
// console.log(sumArray([1,2,3]));

// isSorted([1, 2, 3]) → true
const isSorted = (arr, index = 0) => {
    if(arr.length <= 1) return true;
    if(index === arr.length - 1) return true;
    if(arr[index] > arr[index + 1]) return false;
    return isSorted(arr, index + 1);
}
console.log(isSorted([1,2,3]));

// flatten([1, [2, [3]]]) → [1, 2, 3]
const flatten = (arr) => {
    let res = [];
    for(item of arr) {
        if(Array.isArray(item)) {
            res = res.concat(flatten(item));
        } else {
            res.push(item);
        }
    }
    return res;
}
console.log(flatten([1, [2, [3]]]));

