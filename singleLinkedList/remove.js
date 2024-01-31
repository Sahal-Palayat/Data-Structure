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

//------------remove ------------------
removeFrom(index){
    if(index < 0|| index > this.size){
        return null
    }

    let removedNode
    if(index===0){
        removedNode.next=prev.next
        prev.next=removedNode
    }else{
        let prev =this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }

        removedNode= prev.next
        prev.next=removedNode.next
        
    }
    this.size--
    return removedNode.data
}


//------------------------------------

removeValue(data){
    // if(!this.data){
    //     console.log('empty');
    // }
    if(this.head.data===data){
        this.head=this.head.next
        this.size--
        return data
    }else{
        let prev= this.head

        while(prev.next && prev.next.data!==data){
            prev=prev.next
        }

        let removedNode

        if(prev.next){
            removedNode= prev.next
            prev.next=removedNode.next
            this.size--
            return data
        }
        return null
    }
}

//---------search-------------------
search(data){
    if(!this.head){
        return -1
    }

    let i=0
    let curr=this.head

    while(curr){
        if(curr.data===data){
            return i
        }

        curr=curr.next
        i++
    }
    return -1
}
//----------------------------------

reverse(){
    let prev=null
    let curr= this.head
    while(curr){
        let next = curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev
}

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


linkedList.insert(0,567)
linkedList.insert(1,9898)
linkedList.insert(2,989676)
linkedList.insert(3,569)
linkedList.append(10)
linkedList.prepend(1)
linkedList.removeValue(10)
linkedList.display();

// console.log(linkedList.search(10),';;;;;;;;;;;;;;;;;;;;;;');

// linkedList.reverse()

// linkedList.display();


// const res=linkedList.search(2)

// console.log(res);