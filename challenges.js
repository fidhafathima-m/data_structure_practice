// Write a recursive function countSteps(n) that calculates how many ways you can climb to the top of a 
// staircase with n steps. You can climb 1 step or 2 steps at a time.

// For example:

// countSteps(3) should return 3, because you can climb the stairs in three ways: (1+1+1), (1+2), (2+1).

function countSteps(n) {
    if(n === 0 || n === 1) return 1;
    return countSteps(n-1) + countSteps(n -2)
}
// console.log(countSteps(4));


// Write a recursive function isPalindrome(str) that determines if a given string is a palindrome 
// (reads the same forwards and backwards).

// For example:

// isPalindrome("radar") should return true.

// isPalindrome("hello") should return false.

function isPalindrome(str) {
    if(str.length <= 1) return true;
    if(str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}
// console.log(isPalindrome('radar'));
// console.log(isPalindrome('hello'));

// Write a recursive function sumNestedArray(arr) that calculates the sum of all numbers in a 
// deeply nested array. The array may contain other arrays inside it.

function sumNestedArray(arr) {
    return arr.reduce((sum, val) => {
        if(Array.isArray(val)) {
            return sum + sumNestedArray(val);
        } else {
            return sum + val;
        }
    }, 0)
}

// console.log(sumNestedArray([1, [2, [3, 4]], 5]));

//Given an integer array nums of unique elements, return all possible subsets(power set).
// The solution set must not contain duplicate subsets. You may return the subsets in any order.

function subsets(arr) {
    let res = [];
    let temp = [];
    function recursion(arr, i) {
        if( i === arr.length) {
            return res.push([...temp]);
        }
        temp.push(arr[i]);
        recursion(arr, i + 1);
        temp.pop();
        recursion(arr, i + 1);
    }
    recursion(arr, 0);
    return res;
}
// console.log(subsets([1, 2, 3]));

// calculate a^b using recursion

function power(a,b) {
    if(b === 0)  return 1;
    return power(a, b-1) * a;
}
// console.log(power(2, 3)); // 8

// Sum of digits

function sumOfDigits(n) {
    if(n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n/10));
}
// console.log(sumOfDigits(1342));

// Product of Digits

function productOfDigits(n) {
    if(n % 10 === n) return n;
    return (n % 10) * productOfDigits(Math.floor(n / 10)); 
}

// console.log(productOfDigits(1234)); // 24

// Reverse digits
function reverseDigits(n, reversed = 0) {
    if(n === 0) return reversed;
    return reverseDigits(Math.floor(n / 10), reversed * 10 + n % 10);
}
// console.log(reverseDigits(12345));

// Count no.of Zeros
function countZeros(n, count = 0) {
    if(n === 0) return count;
    if(n % 10 === 0) {
        return countZeros(Math.floor(n / 10), count + 1);   
    } else {
        return countZeros(Math.floor(n / 10), count);
    }
}
console.log(countZeros(30402));

