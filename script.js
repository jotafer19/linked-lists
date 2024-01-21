class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        let current;

        if (!this.head) {
            this.head = newNode;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
    
            current.next = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        let previousHead = null;

        if (this.head) previousHead = this.head;

        this.head = newNode;

        this.head.next = previousHead;
    }

    size() {
        let count = 0;

        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    at(index) {
        let count = 0;
        let current = this.head;

        while (current && count < index) {
            current = current.next;
            count++
        }

        return current;
    }

    pop() {
        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.data === value) return true;
            current = current.next;
        }

        return false;
    }

    find(value) {
        let index = 0;

        let current = this.head;

        while (current) {
            if (current.data === value) return index;
            current = current.next;
            index++;
        }

        return null;
    }

    toString() {
        let current = this.head;
        let string = "";

        while (current) {
            string += `(${current.data}) -> `
            current = current.next;
        }

        return string + 'null'
    }

    insertAt(value, index) {
        if (index === 0 || !this.head) {
            this.prepend(value);
        } else if (index >= this.size()) {
            this.append(value)
        } else {
            const newNode = new Node(value);
            let current = this.head;
            let previous;

            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            previous.next = newNode;
            newNode.next = current;
        }
    }

    removeAt(index) {
        if (!this.head) return 'The list is already empty';
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous;
    
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
                if (current === null) return 'There is no element in that index.';
            }
    
            previous.next = current.next
        }
    }
}

const list = new LinkedList();
list.append(1)
list.append(2)
list.append(558)
console.log(list)
list.insertAt(69, 1)
console.log(list)
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())