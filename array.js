function reverseArray(arr) {
    let res = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}
// console.log(reverseArray([1,2,3,4,5]));

function reverseArrayAnother(arr) {
    let left = 0; let right = arr.length - 1;
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
// console.log(reverseArray([1,2,3,4,5]));

function sumOfEven(arr) {
    let s = 0, c = 0;
    for(let num of arr) {
        if(num % 2 === 0) {
            s += num;
            c++;
        }
    }
    return c === 0 ? 0 : s/c;
}

// console.log(sumOfEven([1,2,3,4,5,6,7,8,9]));

function recursiveSumOfEven(arr, s = 0, c = 0, index = 0) {
    if(index === arr.length) {
        return c === 0 ? 0 : s / c;
    }
    if(arr[index] % 2 === 0) {
        s += arr[index];
        c++;
    }
    return recursiveSumOfEven(arr, s, c, index + 1)
}
// console.log(recursiveSumOfEven([1,2,3,4,5,6,7,8,9]));

function reverseString(str) {
    if(str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
}
// console.log(reverseString('hello'));

function recursiveReverseArray(arr, left = 0, right = arr.length - 1) {
    if(left > right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    return recursiveReverseArray(arr, left + 1, right - 1);
}
// console.log(recursiveReverseArray([1,2,3,4,5]));

function findMin(arr) {
    if(arr.length === 1) {
        return arr[0];
    }
    let min = findMin(arr.slice(1));
    return Math.min(arr[0], min);
}
// console.log(findMin([3,2,1,4,5]));

function multiply(arr, index = 0, product = 1) {
    if(index === arr.length) return product;
    return multiply(arr, index + 1, product * arr[index]);
}
// console.log(multiply([1,2,3,4,5]));

// Write a recursive function to calculate the Fibonacci number at a given position, n. 
// For example: fibonacci(4) should return 3.

function fibonacciAtPos(n) {
    if(n <= 1) return n;
    return fibonacciAtPos(n - 1) + fibonacciAtPos(n - 2);
}

// console.log(fibonacciAtPos(4));

// Write a recursive function to reverse a string. 
// For instance, reverseString("hello") should return "olleh".

function reverseStrings(str) {
    if(str.length === 1) return str;
    return reverseStrings(str.slice(1)) + str[0];
}

// console.log(reverseStrings('hello'));

// Check whether an array is sorted or not

function sortedOrNot(arr, index = 0) {
    if(index === arr.length - 1) return true;
    return arr[index] <= arr[index + 1] && sortedOrNot(arr, index + 1);
}
// console.log(sortedOrNot([1,6,7,2,1]));

// Linear search with recursion
function linearSearch(arr, target, index = 0) {
    if(index === arr.length) {
        return "Not found";
    }  
    if(arr[index] === target) {
        return `Found at ${index}`;
    } else {
        return linearSearch(arr, target, index + 1);
    }
}
// console.log(linearSearch([2,1,4,6,3], 2));

// Linear search with recursion
function linearSearchAllIndex(arr, target, index = 0, res = []) {
    if(index === arr.length) {
        return res;
    }  
    if(arr[index] === target) {
        res.push(index);
    } 
    return linearSearchAllIndex(arr, target, index + 1, res);
    
}
console.log(linearSearchAllIndex([2,1,4,4,6,3], 4));
