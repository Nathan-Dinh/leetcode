//Data structure that contains a head, tail, and length property
//Linked lists consist of nodes, and each node has a value and a pointer to another node or null
/** 
 * Advantages of Single Linked Lists:
 *  1. Dynamic Size: A single linked list offers the developer flexibility to dynamically grow or shrink a list
 *  2. Efficient Insertions and Deletions
 *  3. Low Memory Overhead
 * 
 * Disadvantages of Single Linked Lists:
 *  1. No Backward traversal: Only support traversal in one direction, from head to tail.
 *  2. Inefficient Access: Accessing elements at arbitrary positions requires traversing from the head
 *  3. Extra Memory Usage: Each node necessitates and additional reference, potentially leading to higher memory 
 *     consumption compared to contiguous storage structures like arrays
 * 
 * Use Cases:
 *  1. Implementing Stacks and Queues
 *  2. Undo/Redo
 *  3. Symbol Tables in Compilers
 */

class Node {
  constructor(val) {
    this.val = val; //Value
    this.next = null; //Pointer
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  Push(val) {
    var newNode = new Node(val); // This pushes a new node at the start of the linked list
    if (!this.head) {
      this.head = newNode; // Sets ths head to the newNode that was created
      this.tail = this.head; // This sets the tail to the head
    } else {
      this.tail.next = newNode; // Sets the next property within the node to the newNode
      this.tail = newNode; // This sets the tail to the newNode
    }
    this.length++; //Increases the length 
    return this;
  }

  Traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  Pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

var list = new SinglyLinkedList();
list.Push("Hello");
list.Push("GoodBye");
list.Push("!");

console.log(list);
