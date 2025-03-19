class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertAtBeginning(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    insertAtEnd(value) {
        const newNode = new Node(value);
        if(this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    deleteFront(value) {
        if(this.size === 0) {
            console.log("This list is empty.");
        }
        if(this.head.value === value) {
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.size--;
        }
    }
    insertAfter(node, val) {
        let newNode = new Node(val);
        newNode.next = node.next;
        if(node.next) node.next.prev = newNode;
        node.next = newNode;
        newNode.prev = node;
        this.size++;
    }
    forwardTraversal() {
        if(this.size === 0) {
            console.log("This list is empty");
        }
        let curr = this.head;
        let res = [];
        while(curr !== null) {
            res.push(curr.value);
            curr = curr.next;
        }
        console.log("Forward Traversing: ",res.join(" <-> "));
    }
    backwardTraversing() {
        if(this.size === 0) {
            console.log("This list is empty");
        } 
        let curr = this.tail;
        let res = [];
        while(curr !== null) {
            res.push(curr.value);
            curr = curr.prev;
        }
        console.log("Backward traversing: ",res.join(" <-> "));
    }
}

const list = new DoublyLinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.insertAtBeginning(40);
list.insertAtEnd(60);
list.forwardTraversal();
list.backwardTraversing();
list.deleteFront(30);
list.forwardTraversal();
let node = list.head.next;
list.insertAfter(node, 100);
list.forwardTraversal();