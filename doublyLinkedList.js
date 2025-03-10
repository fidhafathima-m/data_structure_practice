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
    print() {
        if(this.size === 0) {
            console.log("This list is empty");
        }
        let curr = this.head;
        let res = [];
        while(curr !== null) {
            res.push(curr.value);
            curr = curr.next;
        }
        console.log(res);
    }
}

const list = new DoublyLinkedList();
list.print();
list.insertAtBeginning(10);
list.print();
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.insertAtBeginning(40);
list.print();
list.insertAtEnd(60);
list.print();