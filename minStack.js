// minStack

// recreate the Stack class as a minStack.
// minStacks support the following methods:
// push(node), pop(), peek(), isEmpty(), size()
// and a new method called
// getMin()

// getMin() should retrieve the minimum element of the stack.
// We should be able to do this in constant time with no looping!
// Just like size(), we can make this constant!
// How would we modify push and pop to keep track of a minimum element?
// Always checking if we need to update the min could be a way!

class Node {
    constructor(data){
        this.data = data;
        this.next = next;
    }
}

class minStack {
    constructor(){
        this.top = null;
        this.length = 0;
        this.mins = [];
    }

    push(node){
        if (this.mins.length === 0 || node.data < this.getMin().data){
            this.mins.push(node);
        }
        node.next = this.top;
        this.top = node;
        this.length++;
    };

    pop(){
        if(this.top === null){
            return null;
        };

        var popped = this.top;
        this.top = this.top.next;
        popped.next = null;
        this.length--;

        if(popped.data === this.getMin().data){
            this.mins.pop();
        }

        return popped;
    }

    isEmpty(){
        if(this.top === null) return true;
        return false;
    }

    peek(){
        return this.top;
    }

    size(){
        return this.length;
    }

    getMin(){
        // not sure how safe this is without error handling
        if(this.mins.length === 0){
            return null;
        }
        return this.mins[this.mins.length - 1];
    }
};

var minStack = new minStack();
minStack.getMin();