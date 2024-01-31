class Node{
    constructor(){
        this.child={}
        this.endOfWord=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let node=this.root
        for(const char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        return node.endOfWord=true
    }
    search(prefix){
        let node=this.root
        for(const char of prefix){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return 
    }

    
}

const trie=new Trie()

trie.insert('sahal')
trie.insert('sahiiiii')
trie.insert('najil')

console.log(trie.search('sa'));