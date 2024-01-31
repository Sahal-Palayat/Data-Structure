class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size=0
    }
//----------------append-----------
    append(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let current =this.head
        while(current.next){
            current=current.next

        }
        current.next =newNode
        this.size++
    }

//---------------------------------    

//-----------------prepend--------
    prepend(data){
        const newNode= new Node(data)
        if(!this.head){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
//-----------------------------------

//----------insert middle----------
 insert(index,data){
    if(index < 0 || index > this.size){
        return;
    }

    if(index==0){
        this.prepend(data)
    }else{
        const newNode=new Node(data)

        let prev=this.head
        for (let i=0 ;i<index-1;i++){
            prev=prev.next;
        }
        if (prev !== null) {
            newNode.next = prev.next;
            prev.next = newNode;
            this.size++

        } else {
            console.log("Index out of bounds.");
        }
    }



 }
//-------------------------------------

//--------------display---------------
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
 //-----------------------------------   
}

var linkedList =new LinkedList();



linkedList.append(39)
linkedList.prepend(10); 
linkedList.append(21)
linkedList.append(28)
linkedList.prepend(11)
linkedList.insert(2,9898)
linkedList.insert(4,567)


linkedList.display();
