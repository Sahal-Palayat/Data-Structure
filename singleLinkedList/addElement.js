class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }

append(data){
    const newNode=new Node(data)

    if(!this.head){
        this.head=newNode
        return;
    
    }
    let current=this.head
    while(current.next){
        current=current.next

    }
    current.next=newNode
    this.size++;
}


prepend(data){
    const newNode=new Node(data)
    if(!this.head){
        this.head=newNode

    }else{
        newNode.next=this.head
        this.head=newNode
    }
    this.size++
}

insert(index,data){
    if(index<0 || index > this.size){
        return
    }

    if(index==0){
        this.prepend(data)
    }else{
        const newNode= new Node(data)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next;
        }

        if(prev !==null){
            newNode.next=prev.next
            prev.next=newNode
            this.size++
        }else{
            console.log('not found');
        }
    
    }
}

display(){
    let current = this.head
    while(current){
        console.log(current.data);
        current=current.next
    }
}

}

const list=new linkedList()

list.append(12)
list.prepend(1)
list.insert(1,123)

list.display()