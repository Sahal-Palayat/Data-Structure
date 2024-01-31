class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BFS{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root === null
    }

   insert(value){
    const newNode= new Node(value)

    if(this.isEmpty()){
        this.root=newNode
    }else{
        this.insertNode(this.root,value)
    }
   }

   insertNode(root,value){
    if(newNode.value<root.value){
        if(root.left===null){
            root.left=newNode
        }else{
            this.insertNode(root.left,value)
        }
    }else{
        if(root.right===null){
            root.right=newNode
        }else{
            this.insertNode(root.right,value)
        }
    }
   }
}