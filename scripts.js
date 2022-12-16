class Node {
    constructor(value = null) {
        this.value = value;
        this.ref = null;
    }
}

class LinkedList {
    constructor(head = new Node()) {
        this.head = new Node(head);
        this.tail = this.head;
        this.length = 1;
    }

    // Memasukan element di akhir (tail)
    append(value) {
        const newNode = new Node(value);
        this.tail.ref = newNode;
        this.tail = newNode;
        this.length++;
    }

    // Memasukan element di awal (head)
    prepend(value) {
        const newNode = new Node(value);
        newNode.ref = this.head;
        this.head = newNode;
        this.length++
    }

    // melihat element pada index
    lookup(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.ref
            counter++;
        }
        return currentNode;
    }

    // memasukan data ke linkedlist
    insert(index, value) {
        let firstNode = this.lookup(index - 1);
        let secondNode = this.lookup(index);

        const newNode = new Node(value);
        firstNode.ref = newNode;
        newNode.ref = secondNode;
        this.length++;
    }

    // remove (menghapus data pada linkedlist)
    remove(index, value) {
        let firstNode = this.lookup(index - 1);
        let unwantedNode = this.lookup(index);

        firstNode.ref = unwantedNode.ref;
        this.length--;
    }

    reverse() {
        if (!this.head.ref) {
            return this.head;
        }

        let firstNode = this.head;
        this.tail = this.head;
        let secondNode = this.head.ref;

        while(secondNode) {
            const temp = secondNode.ref;
            secondNode.ref = firstNode;
            firstNode = secondNode;
            secondNode = temp;
        }
        this.head.ref = null;
        this.head = firstNode;
    }
}

const ll = new LinkedList(0);
ll.append(1);
ll.append(2);
ll.prepend(-1)
ll.insert(2, 5);
ll.remove(1)
ll.reverse()
console.log(ll)
// console.log(ll.lookup(1))