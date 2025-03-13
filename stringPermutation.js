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

console.log(permute("abc"));