
class Node{
    constructor(data){
        this.data=data
        this.prev=null
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    prepend(data){
        const newNode=new Node(data)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode.next
            this.head=newNode
        }

    }

    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
           this.tail.next=newNode
           newNode.prev=this.tail
           this.tail=newNode
        }
    }



    display(){
        let current =this.head
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
}

const res=new linkedList()

res.append(45)
res.prepend(93)
res.prepend(9348)
res.prepend(98)
res.prepend(12)




res.display()