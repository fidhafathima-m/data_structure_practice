class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function sortLL(head) {
    if(!head || head === null) return null;

    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }

    arr.sort((a, b) => a - b);

    let newNode = new Node(arr[0]);
    let curr = newNode;

    for(let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return newNode;
}

function printll(head) {
    if(head === null) return null;
    else {
        let curr = head;
        let res = [];
        while(curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        console.log(res.join(" -> "));
    }
    
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(5);
head.next.next.next = new Node(4);
console.log("original: ");
printll(head)
head = sortLL(head);
printll(head);