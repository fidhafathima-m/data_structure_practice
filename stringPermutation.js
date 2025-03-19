function permute(str) {
    let res = [];

    if(str.length === 1) {
        return [str];
    }

    for(let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let remainingStr = str.slice(0, i) + str.slice(i + 1);

        let remainingPermutations = permute(remainingStr);

        for(let perm of remainingPermutations) {
            res.push(currentChar + perm);
        }
    }
    return res;
}

// console.log(permute("abc"));

// Another approach
function stringPermute(str) {
    let res = [];
    function permute(s, curr) {
        if(str.length === 0) res.push(curr);
        else {
            for(let i = 0 ; i < s.length; i++) {
                permute(s.slice(0, i) + s.slice(i + 1), curr + s[i]);
            }
        }
    }
    permute(str, '');
    return res;
}

console.log(permute("abc"));
