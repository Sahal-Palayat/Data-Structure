class Stack{
    constructor(){
        this.items=[]
        this.top=-1

    }
    push(element){
        this.top++
        this.items[this.top]=element
        
    }
    pop(){
        if(this.isEmpty()){
            console.log('empty');
        }
        this.items.splice(this.top,1)
        this.top--
    }
    isEmpty(){
        this.items.length===0
    }
    display(){
        if(this.isEmpty()){
            console.log('empty');
        }
        console.log(this.items);
    }
}

const res=new Stack()

res.push(43)
res.push(87)
res.pop()
res.display()