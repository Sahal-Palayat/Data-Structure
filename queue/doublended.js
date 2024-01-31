class DoublyEndedQueue {
    constructor() {
        this.items = [];
        this.front = -1;
        this.rear = -1;
        this.size=0
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    addRear(element) {
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.items[this.rear] = element;
        } else {
            this.rear++;
            this.items[this.rear] = element;
        }
    }

    removeRear() {
        const item = this.items[this.rear];
        this.rear--;
        return item;
    }

    addFront(element) {
        if (this.isEmpty()) { 
            this.front = 0;
            this.rear = 0;
            this.items[this.front] = element;
        } else {
            this.front--;
            this.items[this.front] = element;
        }
    }

    removeFront() {
        const item = this.items[this.front];
        this.front++;
        return item;
    }

    display() {
        console.log(this.items);
    }
}

const queue = new DoublyEndedQueue();
queue.addRear(12);
queue.addRear(345);
queue.addRear(87);

queue.addFront(23);
queue.display();
