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
        this.size=0
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
            this.size++
    }

    prepend(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }
        this.size++

    }


    display(){
        let current=this.head
        while(current){
            console.log(current.data);
            current=current.next
        }
    }
}

const ans=new linkedList()

ans.prepend(17)
ans.prepend(87)
ans.append(57)
ans.append(12)

ans.display()