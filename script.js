class createNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class createLinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new createNode(value);

        if (!this.head) return this.head = newNode;

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    prepend(value) {
        const newNode = new createNode(value);

        newNode.next = this.head;

        this.head = newNode;
    }

    size() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if (!this.head) return this.head;

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    at(index) {
        if (!this.head) return this.head;

        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
            if (!currentNode) return null;
        }

        return currentNode;
    }

    pop() {
        if (!this.head) return;

        if (!this.head.next) return this.head = null;

        let currentNode = this.head;
        let previous;

        while (currentNode.next) {
            previous = currentNode;
            currentNode = currentNode.next;
        }

        previous.next = null;
    }

    contain(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === value) return true;
            currentNode = currentNode.next;
        }

        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode) {
            if (currentNode.data === value) return index;
            currentNode = currentNode.next;
            index++;
        }

        return null;
    }

    toString() {
        let currentNode = this.head;
        let result = '';

        while (currentNode) {
            result += `(${currentNode.data}) -> `;
            currentNode = currentNode.next;
        }

        return result += 'null';
    }

    insertAt(value, index) {
        if (index === 0) return this.prepend(value);

        const newNode = new createNode(value);
        
        let currentNode = this.head;
        let previous;

        for (let i = 0; i < index; i++) {
            previous = currentNode;
            currentNode = currentNode.next;
            if (!currentNode) return 'No valid index';
        }

        previous.next = newNode;
        newNode.next = currentNode;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) return this.head = this.head.next;

        let currentNode = this.head;
        let previous;

        for (let i = 0; i < index; i++) {
            previous = currentNode;
            currentNode = currentNode.next;
            if (!currentNode) return 'No valid index';
        }

        previous.next = currentNode.next;
    }
}

const list = new createLinkedList();

list.append(1);
list.append(2);
list.prepend(0);
list.append(234)
console.log(list)
console.log(list.size());
console.log(list.getHead())
console.log(list.getTail())
console.log(list.at(1))
console.log(list.contain(200))
console.log(list.find(234))
console.log(list.toString())
console.log(list.insertAt(147, 2))
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())
