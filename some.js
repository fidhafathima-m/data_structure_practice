function recursiveSum(arr, index = 0) {
    if(index === arr.length) return 0;
    return arr[index] + recursiveSum(arr, index + 1);
}

// console.log(recursiveSum([1,2,3,4,5]));

function thirdLargest(arr) {
    arr.sort((a, b) => a - b);
    return arr[2];
}
// console.log(thirdLargest([34,2,12,3,56]));

function thirdLargestSet(arr) {
    let unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[2] !== undefined ? unique[2] : null;
}
// console.log(thirdLargest([34,2,12,3,56]));


function lengthOfLongestSubstring(s) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for(let end = 0; end < s.length; end++) {
        if(map.has(s[end]) && map.get(s[end]) >= start) {
            start = map.get(s[end]) + 1;
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}
// console.log(lengthOfLongestSubstring("abcabcbb"));

function productExceptSelf(arr) {
    let left = 1;
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        result[i] = left;
        left *= arr[i];
    }

    let right = 1;
    for(let i = arr.length -1 ; i >= 0; i--) {
        result[i] *= right;
        right *= arr[i];
    }
    return result;
}
// console.log(productExceptSelf([1, 2, 3, 4]));

function characterToRemove(s) {
    if(s.length === 0) return s;
    if(s[0] === 'L' || s[0] === 'l') {
        return characterToRemove(s.slice(1));
    }
    return s[0] + characterToRemove(s.slice(1));
}
// console.log(characterToRemove("Hello"));

function areAnagrams(s1, s2) {
    if(s1.length !== s2.length) return false;

    let map = new Map();
    for(let char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for(let char of s2) {
        if(!map.has(char) || map.get(char) === 0) return false;
        map.set(char, map.get(char) - 1);
    }
    return true;
}

// console.log(areAnagrams("car", "rat"));

function reverseString(str) {
    let res = '';
    for(let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}
// console.log(reverseString("hello"));

function reverseArray(arr) {
    let left = 0; 
    let right = arr.length - 1;
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
// console.log(reverseArray([1,2,3,4,5]));

function findPairWithSum(arr, sum) {
    let set = new Set();

    for(num of arr) {
        let complement = sum - num;
        if(set.has(complement)) {
            return [complement, num];
        }
        set.add(num)
    }
    return null;
}
// console.log(findPairWithSum([1,2,3,4,5,6,7,8,9], 10));

function flattenArray(arr) {
    let res = [];
    for(let item of arr) {
        if(Array.isArray(item)) {
            res = res.concat(flattenArray(item));
        } else {
            res.push(item);
        }
    }
    return res;
}

// console.log(flattenArray([1,2, [3,4]]));

function recursiveFiveTimes(c = 1) {
    if(c === 6) return;
    console.log("Recursive count: ", c);
    recursiveFiveTimes(c + 1)
}
// recursiveFiveTimes();

function extractNumbersFromStr(str) {
    return str.match(/\d/g) ? str.match(/\d/g).map(Number) : []
}
console.log(extractNumbersFromStr('1a2s233fdff'));

function removeAllOcurrences(str, char) {
    return str.split(char).join('');
}
// console.log(removeAllOcurrences('hello world', 'o'));

function longestIncreasingSubArray(arr) {
    let max = 0;
    let currentLen = 1;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
            currentLen++;
        } else {
            max = Math.max(max, currentLen);
            currentLen = 1;
        }
    }
    return Math.max(max, currentLen);
}
// console.log(longestIncreasingSubArray([1,2,2,2,2,3,4,5,5,5]));

function deleteSpecificElement(arr, val) {
    return arr.filter(item => item !== val);
}
// console.log(deleteSpecificElement([1,5,2,4], 2));

function recursiveCharRe4move(str, char) {
    if(str.length === 0) return '';
    if(str[0] === char) {
        return recursiveCharRe4move(str.slice(1), char);
    }
    return str[0] + recursiveCharRe4move(str.slice(1), char);
}
// console.log(recursiveCharRe4move('hello world', 'l'));

function recursiveReverseWords(str) {
    let words = str.split(' ');

    function reversedWords(words) {
        if(words.length === 0) return '';
        return words[words.length - 1] + reversedWords(words.slice(0, words.length - 1));
    }
    return words.map(reversedWords).join(' ')
}
// console.log(recursiveReverseWords('hello world'));
