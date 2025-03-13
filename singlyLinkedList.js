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
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertEnd(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insertAtIndex(val, index) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.insertFront(val);
        } else {
            const node = new Node(val);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeIndex(index) {
        if (index < 0 || index >= this.size) return;
        let removedNode;
        if(index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.val;
    }

    removeValue(val) {
        if(this.isEmpty()) return null;
        if(this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return val;
        } else {
            let prev = this.head;
            while(prev.next && prev.next.val !== val) {
                prev = prev.next;
            }
            let removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return val;
        }
    }

    search(val) {
        if(this.isEmpty()) return -1;
        let curr = this.head;
        let i = 0;
        while(curr) {
            if(curr.val === val) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    print() {
        if (this.size === 0) {
            console.log("List is empty");
            return;
        }
        let curr = this.head;
        let res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        console.log(res.join(" -> "));
    }

    reverse() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }
        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

// Initialize the linked list
const list = new LinkedList();
list.print(); // List is empty
list.insertFront(100);
list.insertFront(200);
list.insertFront(300);
list.print(); // 300 -> 200 -> 100
list.insertEnd(500);
list.print(); // 100 -> 200 -> 300 -> 500
list.insertAtIndex(600, 2);
list.print(); // 100 -> 200 -> 600 -> 300 -> 500
list.removeIndex(0);
list.print();
list.removeValue(600);
list.print();
list.reverse();
list.print(); 
console.log(list.search(100));
