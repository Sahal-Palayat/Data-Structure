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
            newNode.next=this.head
        }

       let current =this.head
       if(current.next !== this.head){
        current=current.next
       }
       current.next=newNode
       newNode.next=this.head
       this.size++
    }
 
}