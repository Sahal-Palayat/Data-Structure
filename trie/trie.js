
class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let node = this.root
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        return node.isEndOfWord = true;
    }
    search(word) {  
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    autoSuggest(prefix){
        let suggestions=[]
        let node =this.root
        for(const char of prefix){
            if(!node.child[char]){
                return suggestions
            }
            node=node.child[char]
        }
        this.findPrefix(node,prefix,suggestions)
        return suggestions
    }

    findPrefix(node,currentWord,suggestions){
        if(node.endOfWord){
            suggestions.push(currentWord)
        }

        for(const char in node.child){
            this.findPrefix(node.child[char],currentWord+char,suggestions)
        }
    }

    remove(word){
        return this._remove(this.root,word,0)
    }

   _remove(node,word,index){
         if(!node){
            return false;
         }
        if(index===word.length){
            node.isEndOfWord = true;
          return Object.keys(node.child).length===0?null:node
        }
        const char=word[index];
        node.child[char]=this._remove(node.child[char],word,index+1);

        if(!node.isEndOfWord && Object.keys(node.child).length===0){
           return null;
        }
        return node;
   }



 delete(word) {
    this._delete(this.root, word, 0);
}

_delete(node, word, depth) {
    if (depth === word.length) {
        if (node.isEndOfWord) {
            node.isEndOfWord = false;
        }
        // Additional logic for handling cases where a word may be a prefix of another word.
    } else {
        const char = word[depth];
        if (node.children[char]) {
            this._delete(node.children[char], word, depth + 1);
        }
    }
}



}
const trie = new Trie();
trie.insert("apple");
trie.insert("ant");
trie.remove('ant')
console.log(trie.search("an"));
console.log(trie.startsWith("a"));