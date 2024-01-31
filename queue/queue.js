class Queue{
    constructor(){
        this.items=[]
     
    }

    enqueue(element) {
        this.items[this.items.length]=element
    }
    

    dequeue(){
        const removedItem=this.items[0]
        this.items=this.items.slice(1)
        return removedItem
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }  
        return null
    }

    size(){
        return this.items.length
    }


    isEmpty(){
        return this.items.length===0
    }

    display(){
        console.log(this.items);
    }
}

const queue= new Queue()

queue.enqueue(12)
queue.enqueue(45)

console.log(queue.peek());
queue.display()

// console.log(queue.dequeue());
// queue.display()
