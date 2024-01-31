class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class sortedLinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    insert(data){
        const newNode=new Node(data)

        if(!this.head || data < this.head.data){
            newNode.next=this.head
            this.head=newNode
        }else{
            let current= this.head
            while(current.next && data >current.next.data){
                current=current.next
            }

            newNode.next=current.next
            current.next=newNode
        }

    }

    removeDuplicates(){
        let current =this.head
        while(current&&current.next){
            if(current.data===current.next.data){
                current.next=current.next.next
            }else{
                current=current.next
            }
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

const res=new sortedLinkedList()

res.insert(1)
res.insert(4)
res.insert(3)
res.insert(9)
res.insert(6)
res.insert(7)
res.insert(9)
res.insert(6)
res.insert(7)


res.display()
console.log('sasasasasssasa');
res.removeDuplicates()
res.display()