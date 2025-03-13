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
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    insertEnd(val) {
        const node = new Node(val);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
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
    reverse() {
        if(this.isEmpty()) {
            console.log("List is empty");
        }
        let prev = null;
        let curr = this.head;

        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

const list = new LinkedList();
list.print();
list.insertFront(100);
list.insertFront(200);
list.insertFront(300);
list.print();
list.reverse();
list.print();
list.insertEnd(500);
list.print();
