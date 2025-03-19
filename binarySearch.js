function binarySearchRecursion(arr, target, left = 0, right = arr.length - 1) {
    if(left > right) return -1;
    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === target) return mid;
    if(arr[mid] < target) return binarySearchRecursion(arr, target, mid + 1, right);
    return binarySearchRecursion(arr, target, left, mid - 1);
};

console.log(binarySearchRecursion([1,2,3,4,5], 3));