function arrToLL(arr) {
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
    let curr = head;
    let res = [];

    while(curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    console.log(res.join(" -> "));
}

let list = [1,2,3,4,5];
let head = arrToLL(list);
printLL(head)