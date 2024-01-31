class circularQueue{
    constructor(size){
        this.items=new Array(size)
        this.size=size
        this.front=-1
        this.rear=-1
    }

    isEmpty(){
        return this.front== -1 && this.rear == -1
    }
    isFull(){
        return (this.rear+1)%this.size===this.front
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log('full');
            return  ;
        }
    
        if (this.isEmpty()) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = element;
    }
    

    dequeue(){
        if(this.isEmpty()){
            console.log('empty');
            return
        }

        const item = this.items[this.front]
        if(this.front===this.rear){
            this.front=-1
            this.rear=-1
        }else{
            this.front=(this.front+1)%this.size
        }
        return item
    }

    display(){
       if(this.isEmpty()){
        console.log('empty');
      
       }

       for(let i=this.front;i<=this.rear;i++)
       {
           console.log(this.items[i]);
       }
   
    }
}

const res =new circularQueue(5)

res.enqueue(12)
res.enqueue(13)
res.enqueue(14)
res.enqueue(13)

res.display()




