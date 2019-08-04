class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//TODO: js docs for properties
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length = 1;
        }
        else {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    }

    pop() {
        if (this.length === 0)
            return undefined;

        let tail = this.tail;
        let current = this.head;
        let secondToLast = current;
        while (current.next) {
            secondToLast = current;
            current = current.next;
        }
        secondToLast.next = null;
        this.tail = secondToLast;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return tail;
    }

    print() {
        let currentNode = this.head;
        let toString = ''
        while (currentNode) {
            toString += currentNode.value + ' -> ';
            currentNode = currentNode.next;
        }
        // remove the last ' -> '
        toString = toString.substr(0, toString.length - 4);
        console.log(toString);
    }
}

function main() {
    let singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(1);
    singlyLinkedList.push(12);
    singlyLinkedList.push(13);
    singlyLinkedList.push(14);
    singlyLinkedList.print();
    console.log('popping: ' + singlyLinkedList.pop().value);
    singlyLinkedList.print();
    singlyLinkedList.push(15);
    singlyLinkedList.print();
};

main();