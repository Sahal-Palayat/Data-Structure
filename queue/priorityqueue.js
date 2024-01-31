class PriorityQueue {
    constructor(){
        this.items=[]
        this.front=0
        this.rear=0
    }

    enqueue(element,priority){
        const newElement={element,priority}
    
        if(this.isEmpty()){
            this.items[this.rear]=newElement
        }else{
            let added=false
            for(let i=this.front;i<this.rear;i++){
                if(newElement.priority > this.items[i].priority){
                    this.items.splice(i,0,newElement)
                    added=true
                    break
                }
            }
            if(!added){
                this.items[this.rear]=newElement
            }
        }
        this.rear++
    }
    

    dequeue(){
        if(this.isEmpty()){
            console.log(empty);
            return
        }
    
        const item =this.items[this.front]
        delete this.items[this.front]
        this.front++
    
        if(this.front>this.rear){
            this.front=0
            this.rear=0
        }
        return item
    }
    

    isEmpty(){
        return this.front==this.rear
    }
    
    display() {
        if (this.isEmpty()) {
            console.log('Priority queue is empty.');
        } else {
            console.log(this.items.map(item => `${item.task} (Priority: ${item.priority})`).join('\n'));
        }
    }
}

// Example Usage:
const taskQueue = new PriorityQueue();

taskQueue.enqueue(9, 2);
taskQueue.enqueue(97, 1);
taskQueue.enqueue(89, 3);
taskQueue.enqueue(3, 2);




taskQueue.display();
