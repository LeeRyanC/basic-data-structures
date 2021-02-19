// Queue
// FIFO (First in, first out)


class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(node) {
        if (this.rear === null) {
            this.rear = node;
            this.front = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.front === null) {
            return null;
        };
        if (this.front === this.rear) {
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    checkFront() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.front === null;
    }

    length() {
        return this.length;
    }
}


// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
// assume node.data are integers
function greaterOfTwoQueues(queue1, queue2) {
    return sumQueue(queue1) >= sumQueue(queue2) ? queue1 : queue2;
}

function sumQueue(queue) {
    let newQueue = new Queue();
    let sum = 0;

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        sum += node.data;
        newQueue.enqueue(node);
    }

    while (!newQueue.isEmpty()) {
        queue.enqueue(newQueue.dequeue());
    }

    return sum;
}


function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
}