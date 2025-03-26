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
console.log(reverseArray([1,2,3,4,5]));
