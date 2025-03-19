// function hammingDistance(x, y) {
//     let count = 0;
//     if(x.length !== y.length) {
//         return 0;
//     }
//     for(let i = 0; i < x.length; i++) {
//         if(x[i] !== y[i]) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(hammingDistance("hello", "hello"));

// function hammingDistanceBtwIntegers(x, y) {
//     x = x.toString(2);
//     y = y.toString(2);

//     let dis = 0;
//     if(x.length < y.length) {
//         while(x.length !== y.length) x = '0' + x;
//     } else {
//         while(y.length !== x.length) y = '0' + y;
//     }
//     for(let i = 0; i < x.length; i++) {
//         if(x[i] !== y[i]) {
//             dis++;
//         }
//     }
//     return dis;
// }

// console.log(hammingDistanceBtwIntegers(1, 4));

function validAnagram(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
}

// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));

// firstNonRepeatingCharacter

function firstNonRepeatingCharacter(str) {
    let map = new Map();

    for(char of str) {
        map.set(char, ( map.get(char) || 0 ) + 1);
    }

    for(let char of str) {
        if(map.get(char) === 1) {
            return char;
        }
    }
    return null;
}

// console.log(firstNonRepeatingCharacter("aabbcc")); // returns ' '
// console.log(firstNonRepeatingCharacter("abaccdeff")); // returns 'b'

function mostRepeatingCharacter(str) {
    let map = new Map();

    for(let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let mostRepeatingChar = null;
    let maxCount = 0;

    for(let [char, count] of map) {
        if(count > maxCount) {
            maxCount = count;
            mostRepeatingChar = char;
        }
    }
    return mostRepeatingChar;
}


console.log(mostRepeatingCharacter("aabbcc")); 
console.log(mostRepeatingCharacter("abaccccdeff")); 