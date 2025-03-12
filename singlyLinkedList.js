class Node {
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
    isEmpty() {
        return this.size === 0;
    }
    insertFront(val) {
        const node = new Node(val);
        if(this.head === this.isEmpty()) {
            this.head = val;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    print() {
        if(this.size === 0) {
            console.log("List is empty");
        }
        let curr = this.head;
        let res = [];
        while(curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        console.log(res.join(" -> "));
    }
}

const list = new LinkedList();
list.print();
list.insertFront(100);
list.insertFront(200);
list.insertFront(300);
list.print();