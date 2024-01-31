class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
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

    remove(word) {
        this._removeHelper(this.root, word, 0);
    }

    _removeHelper(node, word, index) {
        if (index === word.length) {
            if (node.isEndOfWord) {
                node.isEndOfWord = false;
            }
            // Check if the current node has no other children, and if so, set it to null.
            if (Object.keys(node.children).length === 0) {
                node = null;
            }
            return;
        }
    
        const char = word[index];
        if (!node.children[char]) {
            // Word not found in the trie.
            return;
        }
    
        this._removeHelper(node.children[char], word, index + 1);
    
        // After removing the word from the child, check if the child node can be set to null.
        if (Object.keys(node.children[char].children).length === 0) {
            node.children[char] = null;
        }
    }
    print() {
        this._printHelper(this.root, '');
    }

    _printHelper(node, prefix) {
        if (!node) {
            return;
        }

        console.log(prefix + (node.isEndOfWord ? '*' : ''));
        
        for (const char in node.children) {
            this._printHelper(node.children[char], prefix + char + ' -> ');
        }
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("ZEROOHAVE")

console.log("//////////////////////////");
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true
console.log(trie.search("apricot"));// true
trie.insert('Tree')


trie.print()


trie.remove("app");
// trie.remove("Tree")
trie.remove("ZEROOHAVE")

console.log(trie.search("apple"));  // true
console.log(trie.search("app"));    // false
console.log(trie.search("apricot")); // true

trie.print()