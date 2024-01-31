class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the end of the list
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Print the values of the linked list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage:
//   const linkedList = new LinkedList();
  
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  linkedList.print();
  
//////---------------------------------------------------
