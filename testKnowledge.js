// 1.  Convert an array [1, 2, 3, 4, 5] to a linked list.

function arrayToLL(arr) {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    let head = new Node(arr[0]);
    let curr = head;
    for(let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return head;
}

function printLL(head) {
    if(head === null) return "Empty Linked List";
    let curr = head;
    let res = [];
    while(curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    console.log(res);
}

let LL = arrayToLL([1,2,3,4,5])
// printLL(LL);

// 2. Write a function to find the first non-repeating character in a string.

function firstnonRepeatingChar(str) {
    let map = new Map();
    for(let s of str) {
       map.set(s, (map.get(s) || 0) + 1);
    }
    for(char of str) {
        if(map.get(char) === 1) {
            return char;
        }
    }
    return null;
}
// console.log(firstnonRepeatingChar("qwewqrrt"));

// 3. Implement string permutations.

function stringPermutations(str) {
    let res = [];
    function permute(s, curr) {
        if(s.length === 0) res.push(curr);
        else {
            for(let i = 0; i < s.length; i++) {
                permute(s.slice(0, i) + s.slice(i + 1), curr + s[i]);
            }
        } 
    }
    permute(str, "");
    return res;
}
// console.log(stringPermutations("abc"));

// 4. Sort nodes in a linked list.
function sortNodes(head) {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    if(head === null) return null;
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    arr.sort((a, b) => a - b);
    let dummy = new Node(arr[0]);
    let current = dummy;
    for(let i = 0; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return dummy.next;
}
let ll = arrayToLL([3,5,2,6,3]);
// printLL(sortNodes(ll));

// 5. Reverse a linked list.
function reverseLL(head) {
    if(head === null) return null;
    let curr = head;
    let prev = null;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
let linkedList = arrayToLL([2,3,1,4,5]);
// printLL(reverseLL(linkedList));

// 6. Add a node after the position with particular data in a doubly linked list.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
function nodeAfter(node, val) {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }
    let newNode = new Node(val);
    newNode.next = node.next;
    if(node.next) node.next.prev = newNode;
    node.next = newNode;
    newNode.prev = node;
    return newNode;
}

let A = new Node('A');
let B = new Node('B');
let C = new Node('C');

A.next = B;
B.prev = A;
B.next = C;
C.prev = B;
nodeAfter(B, "X")
// printLL(A);

// 7. Add a node behind the position with particular data in a doubly linked list.

function nodeBehind(node, val) {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }
    let newNode = new Node(val);
    newNode.prev = node.prev;
    newNode.next = node;
    if(node.prev) node.prev.next = newNode;
    node.prev = newNode;
    return newNode.prev === null? null : newNode;
}
nodeBehind(B, "Y");
// printLL(A);

// 8. Delete front and back node from a doubly linked list where data == data.

function deleteFrontBack(head, val) {
    let temp = head;
    while(temp) {
        if(temp.val === val) {
            if(!temp.prev) {
                head = temp.next;
                if(head) head.prev = null;
            } else {
                temp.prev.next = temp.next;
                if(temp.next) temp.next.prev = temp.prev;
            }
            break
        }
        temp = temp.next;
    }
    return head;
}
// console.log("Original");
// printLL(linkedList)
// console.log("After deletion");

let deleted = deleteFrontBack(linkedList, 2);
// printLL(deleted);

// 9. Implement binary search recursion
const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    if(left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
    else return binarySearch(arr, target, left, right - 1);
}
// console.log(binarySearch([3,5,7,9], 3));


// 10. Print first 10 elements of Fibonacci series using recursion

const fibonacci = (n, res = [0, 1]) => {
    if(res.length > n) return res.slice(0, n);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return fibonacci(n, res);
}
// console.log(fibonacci(10));

// 12. Find the frequency of each number in an array
const frequency = arr => {
    let freq = {}
    for(let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
// console.log(frequency([2,1,1,3,3,4,5,5]));

// 13. Delete an element from a specific position in a singly linked list
function specificPosDelete(head, pos) {
    if(pos < 0 || pos > head ) return null;
    let removedNode;
    if(pos === 0) {
        removedNode = head;
        head = head.next;
    } else {
        let prev = head;
        for(let i = 0; i < pos - 1; i ++) {
            prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next
    }
    return head;
}
// printLL(linkedList);
// specificPosDelete(linkedList, 2);
// printLL(linkedList);

// 14. Reverse each word in a string
function reverseEachWord(str) {
    let words = str.split(' ');
    function helper(words) {
        if(words.length === 0) return [];
        let word = words[0];
        let reversed = word.split('').reverse().join('');
        return [reversed, ...helper(words.slice(1))];
    }
    return helper(words).join(' ');
}
// console.log(reverseEachWord("hello world"));

// 15. reversing a word
function reverseWord(word, i = 0) {
    if(i >= word.length) return "";
    return reverseWord(word, i + 1) + word[i];
}
// console.log(reverseWord("Hello"));

// 16. reverse without build in functions
function reverseWithoutBuildIn(str, i = 0, word = "", res = "") {
    if(i >= str.length) return res + reverseWord(word);
    if(str[i] === " ") {
        return reverseWithoutBuildIn(str, i + 1, "", res + reverseWord(word) + " ");
    } else {
        return reverseWithoutBuildIn(str, i + 1, word + str[i], res);
    }
}
// console.log(reverseWithoutBuildIn("hello world"));

// 17. Create a function to find the average of even numbers in an array
function averageOfEven(arr, i = 0, s = 0, c = 0) {
    if(i === arr.length) return c ? s/c : 0;
    if(arr[i] % 2 === 0) {
        return averageOfEven(arr, i + 1, s + arr[i] , c + 1);
    }
    return averageOfEven(arr, i + 1, s, c);
}
// console.log(averageOfEven([1,2,3,4,5,6]));

// 18. Create a function to find the average of even numbers and change all odd numbers to zeros in an array
function evenAverageOddZeros(arr, i = 0, s = 0) {
    if(i === arr.length) return s ? s : 0;
    if(arr[i] % 2 === 0) {
        return evenAverageOddZeros(arr, i + 1, s + arr[i]);
    } else {
        arr[i] = 0
        return evenAverageOddZeros(arr, i + 1, s);
    }
}
let numbers = [1, 2, 3, 4, 5];
let avg = evenAverageOddZeros(numbers);
// console.log("array: ", numbers);
// console.log("sum of evens: ", avg);

// 19. Implement linked list
class Nodes {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(val) {
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode
        } else {
            let curr = this.head;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = newNode
        }
        this.size++;
        return this.head;
    }
    prepend(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    print() {
        if(this.head === null) return "List empty"
        else {
            let curr = this.head;
            let res = [];
            while(curr) {
                res.push(curr.val);
                curr = curr.next;
            }
            console.log(res.join(" -> "));
        }
    }
}
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(4);
list.append(5)
// list.print();


// 20. Write a recursive function to find the sum of an array

function sumofArray(arr, i = 0) {
    if( i === arr.length ) return 0;
    return arr[i] + sumofArray(arr, i + 1);
}
// console.log(sumofArray([1,2,3,4,5]));

// 21. Find third largest in an array
function thirldLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for(let num of arr) {
        if(num > first) {
            third = second;
            second = first;
            first = num;
        } else if(num > second && num !== first) {
            third = second;
            second = num
        } else if(num > third && num !== second) {
            third = num;
        }
    }
    return third;
}
// console.log(thirldLargest([1,2,3,4,5]));

// 22. Remove the middle element from a linked list
function removeMiddle(head) {
    if(!head) return null;
    let fast = head;
    let slow = head;
    let prev = null;

    while(fast && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = slow.next;
    return head;
}
// printLL(linkedList);
// removeMiddle(linkedList);
// printLL(linkedList)

// 23. Find second largest element in an array

function secondLargest(arr,i = 0, largest = -Infinity, sLargest = -Infinity) {
    if(i === arr.length) return sLargest;
    if(arr[i] > largest) {
        return secondLargest(arr, i + 1, arr[i], largest);
    } else if(arr[i] > sLargest && arr[i] !== largest) {
        return secondLargest(arr, i + 1, largest, arr[i]);
    }
}
// console.log(secondLargest([1,2,3,4,5]));

// 24. Merge two sorted linked lists

function mergeLL(l1, l2) {
    let dummy = new Node(0);
    let curr = dummy;

    while(l1 && l2 !== null) {
        if(l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
        
    }
    if(l1) curr.next = l1;
    if(l2) curr.next = l2;
    return dummy.next;
}
let l1 = arrayToLL([1,2,3,4,5]);
let l2 = arrayToLL([6,7,8,9,10]);
let res = mergeLL(l1, l2);
// printLL(res)

// 25. Remove N'th node from the end of a linked list (fast, slow)

function removeNthFromEnd(head, n) {
    if(!head) return null;
    let fast = head;
    let slow = head;

    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(!fast) return head.next;
    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}
let s = arrayToLL([1,2,3,4,5]);
// printLL(removeNthFromEnd(s, 2));

// 26. Detect cycle in a list (Floyd's algorithm)
function detectCycle(head) {
    if(!head) return null;
    let fast = head;
    let slow = head;

    while(fast && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
}
// Create a cycle manually
let a = arrayToLL([1, 3, 5, 6, 8, 8, 7]);

let curr = a;
let third = null;
let count = 0;

while (curr.next) {
    count++;
    if (count === 3) third = curr;
    curr = curr.next;
}
curr.next = third; // Creates cycle

// console.log("Cycle detected:", detectCycle(a));  

// 27. Find minimum in a sorted rotated array
function minInSortedRotatedArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left];
}

// console.log(minInSortedRotatedArray([3,5,0,2,1]));

// 28. Find longest substring without repeating characters
function longestSubstring(str) {
    let map = new Map();
    let left = 0; 
    let maxLength = 0;

    for(let right = 0; right < str.length; right++) {
        if(map.has(str[right])) {
            left = Math.max(left, map.get(str[right]) + 1);
        }
        map.set(str[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
// console.log(longestSubstring("qwertyqqwww"));

// 29. Find longest substring without repeating characters and return the substring
function longestSubstringReturn(str) {
    let map = new Map()
    let left = 0;
    let maxLength = 0;
    let start = 0;
    for(let r = 0; r < str.length; r++) {
        if(map.has(str[r])) {
            left = Math.max(left, map.get(str[r]) + 1);
        }
        map.set(str[r], r)
        if(r - left + 1 > maxLength) {
            maxLength = r - left + 1;
            start = left;
        }
    }
    return str.slice(start, start + maxLength);
}
// console.log(longestSubstringReturn("qwertyqqwww"));

// 30. Compute product of array except self
function productExceptSelf(arr) {
    let res = [];
    let left = 1;
    for(let i = 0; i < arr.length; i++) {
        res[i] = left;
        left *= arr[i];
    }
    let right = 1;
    for(let i = arr.length - 1; i >= 0; i--) {
        res[i] *= right;
        right *= arr[i];
    }
    return res;
}
// console.log(productExceptSelf([1,2,3,4]));

// 31. Remove a character from a string using recursion
function removeChar(str, char) {
    if(str === "") return "";
    if(str[0] === char) {
        return removeChar(str.slice(1), char);
    }
    return str[0] + removeChar(str.slice(1), char);
}
// console.log(removeChar("hello", "l"));

// 32. Implement delete function for doubly linked list
function deleteDLL(head, node) {
    if(!node) return head;
    if(node === head) {
        head = head.next;
        if(head) head.prev = null;
        return head;
    }
    if(node.prev) node.prev.next = node.next;
    if(node.next) node.next.prev = node.prev;
    return head;
}
let Q = new Node("Q")
let W = new Node("W")
let E = new Node("E")

Q.next = W;
W.prev = Q;
W.next = E;
E.prev = W;

let head = Q;
head = deleteDLL(head, W);
// printLL(head);

// 33. Write a function to check if two strings are anagrams of each other
function areAnagrams(str1, str2) {
    if(str1.length !== str2.length) return false;
    let map = new Map();

    for(let char of str1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of str2) {
        if(!map.has(char) || map.get(char) === 0) return false;
        map.set(char, map.get(char) - 1);
    }
    return true;
}
// console.log(areAnagrams('abc', 'bca'));

// 34. Reverse a doubly linked list without using a set
function appendDLL(val, head) {
    let newNode = new Node(val);
    if(!head) {
        return newNode;
    }
    let curr = head;
    while(curr.next) {
        curr = curr.next;
    }
    curr.next = newNode;
    newNode.prev = curr;
    newNode.next = null;

    return head;
}
function reverseDLL(head) {
    if(!head) return "Empty list";
    let curr = head;
    let temp = null;
    let newHead = null
    while(curr) {
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp;
        newHead = curr;
        curr = curr.prev;
    }
    return newHead;
}
function printDLL(head) {
    let curr = head;
    let res = [];
    while (curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    console.log(res.join(' <-> '));
}

let heads = null;
heads = appendDLL(1, heads);
heads = appendDLL(2, heads);
heads = appendDLL(3, heads);
// printDLL(heads);         // 1 <-> 2 <-> 3
// 
heads = reverseDLL(heads);
// printDLL(heads);         // 3 <-> 2 <-> 1

// 35. Print your Name N times using recursion
function printName(name, n, count = 1) {
    if(count > n) return;
    console.log(count , ". " + name);
    printName(name, n, count + 1);
}
// printName("Fidha", 5);

// 36. Print from 1 to N using Recursion
function oneToN(n, count = 1) {
    if(count > n) return;
    console.log(count);
    return oneToN(n, count + 1);
}
// oneToN(10)

// 37. Print from N to 1 using Recursion
function nToOne(n, count = n) {
    if(count < 1) return;
    console.log(count);
    return nToOne(mergeLL, count - 1);
}
// nToOne(10);

// 38. Sum of first N numbers
function sumOfN(n) {
    if (n <= 0) return 0;
    return n + sumOfN(n - 1);
}
// console.log(sumOfN(4));

// 39. Factorial of a given number

function factorial(n) {
    if(n < 2) return n;
    return n * factorial( n - 1);
}
// console.log(factorial(5));

// 40. fibonacci series using recursion
function fibonaccii(n, res = [0, 1]) {
    if(res.length >= n) return res.slice(0, n);
    let next = res[res.length - 1] + res[res.length - 2];
    res.push(next);
    return fibonaccii(n, res);
}
// console.log(fibonaccii(10));

// 41. Reverse an array

// function reverseArr(arr, i = 0) {
//     if(i >= arr.length / 2) return arr;
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;

//     return reverseArr(arr, i + 1);
// }
// console.log(reverseArr([1,2,3,4,5]));

function reverseArr(arr) {
    if(arr.length === 0) return arr;
    let first = arr[0];
    let remaining = arr.slice(1);
    return reverseArr(remaining).concat(first);
}
// console.log(reverseArr([1,2,3,4,5]));

// 42. Check if a string is palindrome or not
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if(str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}
// console.log(isPalindrome("dad"));

// 43. Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. 
    // For each query, we need to find out how many times the number appears in the array. 
    // For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0. 

function countOccurrences(arr, queries) {
    let freq = {};

    for(let num of arr) {
        freq[num] = (freq[num] || 0) + 1
    }
    let res = [];
    for(let query of queries) {
        res.push(freq[query] || 0);
    }
    return res;
}
let arr = [1, 2, 1, 3, 2];
let queries = [1, 3, 4, 2, 10];
// console.log(countOccurrences(arr, queries));

// 44. Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. 
    // For each query, we need to find out how many times the number appears in the array. 
    // For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0. USING RECURSION

function recursiveCount(arr, queries) {
    function buildFreq(arr, i = 0, freq = {}) {
        if(i === arr.length) return freq;
        let num = arr[i];
        freq[num] = (freq[num] || 0) + 1;
        return buildFreq(arr, i + 1, freq);
    }
    const freqMap = buildFreq(arr);
    function queryResult(queries, i = 0, res = []) {
        if( i === arr.length ) return res;
        let query = queries[i];
        res.push(freqMap[query] || 0);
        return queryResult(queries, i + 1, res)
    }
    return queryResult(queries);
}
// console.log(countOccurrences(arr, queries));

// 45. Counting frequencies of array elements
function countFreq(arr, i = 0, freq = {}) {
    if(i === arr.length) return freq;
    let num = arr[i];
    freq[num] = ( freq[num] || 0 ) + 1;
    return countFreq(arr, i + 1, freq);
}
// console.log(countFreq([1,2,3,4,5,2, 2,1,3,4]));

// 46. Find the highest frequency element
function countFrequ(arr, i = 0, freq = {}, highest = 0, highestElem = null) {
    if(i === arr.length) return highestElem + ": " + highest;
    let num = arr[i];
    freq[num] = ( freq[num] || 0 ) + 1;
    if(freq[num] > highest) {
        highest = freq[num];
        highestElem = num;
    }
    return countFrequ(arr, i + 1, freq, highest, highestElem);
}
// console.log(countFrequ([1,2,3,4,5,2,2,1,3,4]));


