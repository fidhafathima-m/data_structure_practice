function findFrequency(arr) {
    let fr = {};
    arr.forEach(num => {
        if(fr[num]) {
            fr[num] += 1;
        } else {
            fr[num] = 1;
        }
    });
    return fr;
}

// console.log(findFrequency([1,1,2,3,2,3,5,6,7,8]));

function findFrequencyAlter(arr) {
    let freq = {};

    for(let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log(findFrequency([1,1,2,3,2,3,5,6,7,8]));