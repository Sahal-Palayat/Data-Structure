class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null).map(() => null);
    }

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    insert(key, value) {
        const index = this.hash(key);
        const newNode = new Node(key, value);

        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    retrieve(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return undefined; 
        }

        let current = this.table[index];
        while (current !== null) {
            if (current.key === key) {
                return current.value; 
            }
            current = current.next;
        }

        return undefined;
    }

    display() {
        this.table.forEach((node, index) => {
            console.log(`${index}:`);
            while (node !== null) {
                console.log(`  ${node.key}: ${node.value}`);
                node = node.next;
            }
        });
    }
}

// Example usage:
const hashTable = new HashTable(10);

hashTable.insert("name", "John");
hashTable.insert("age", 25);
hashTable.insert("city", "ExampleCity");
hashTable.insert("name", "Jane"); // Collision
console.log(hashTable.retrieve('age')
);
hashTable.display();
