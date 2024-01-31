class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    findMin() {
        let node = this.root;
        if (!node) {
            return null;
        } else {
            while (node.left) {
                node = node.left;
            }
            return node.value;
        }
    }

    findMax() {
        let node = this.root;
        if (!node) {
            return null;
        } else {
            while (node.right) {
                node = node.right;
            }
            return node.value;
        }
    }

    contains(node = this.root, value) {
        if (!node) {
            return false;
        }
        if (value === node.value) return true;
        else if (value < node.value) {
            return this.contains(node.left, value);
        } else {
            return this.contains(node.right, value);
        }
    }

    preorder(node) {
        if (!node) return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    inorder(node) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    postorder(node) {
        if (!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    validatebst(root) {
       
        return this.isValid(root, -Infinity, Infinity);
    }
 
    isValid(node, min, max) {
        if (!node) {
            return true;
        }
        if (node.value < min || node.value > max) {
            return false;
        }
        return this.isValid(node.left, min, node.value)
         && this.isValid(node.right, node.value, max);
    }

    closest(target) {
        return this.recursiveClosest(this.root, target, Infinity);
    }

    recursiveClosest(node, target, closest) {
        if (!node) {
            return closest;
        }
        if (Math.abs(node.value - target) < Math.abs(closest - target)) {
            closest = node.value;
        }
        if (target < node.value) {
            return this.recursiveClosest(node.left, target, closest);
        } else if (target > node.value) {
            return this.recursiveClosest(node.right, target, closest);
        } else {
            return closest;
        }
    }
}

const myTree = new Tree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(3);
myTree.insert(7);
myTree.insert(12);
myTree.insert(18);

// console.log("Minimum value:", myTree.findMin());
// console.log("Maximum value:", myTree.findMax());
// console.log("Does tree contain 7?", myTree.contains(undefined, 7));
// console.log("Is the tree a valid BST?", myTree.validatebst(myTree.root));
// console.log("Closest value to 8:", myTree.closest(8));

// console.log("Preorder traversal:");
// myTree.preorder(myTree.root);
// console.log("Inorder traversal:");
// myTree.inorder(myTree.root);
// console.log("Postorder traversal:");
// myTree.postorder(myTree.root);
console.log(myTree.validatebst(myTree.root));