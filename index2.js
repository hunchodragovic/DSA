class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // gang
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      // If list is empty, set head and tail to new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // New node points to the old head
      this.head = newNode; // Update head to the new node
    }

    this.length++; // Increase size of list
    return this; // Return the updated list
  }

  shift() {
    if (!this.head) return undefined; // If list is empty, return undefined

    let removedNode = this.head; // Store the old head
    this.head = this.head.next; // Move head to the second node
    this.length--;

    if (this.length === 0) {
      // If list is now empty, reset tail
      this.tail = null;
    }

    return removedNode.value; // Return the removed node’s value
  }
  get(index) {
    if (index < 0 || index >= this.length) return null; // Invalid index
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set() {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
}

let list = new linkedList();

list.unshift(30); // 30 -> null
list.unshift(20); // 20 -> 30 -> null
list.unshift(10);
list.unshift(40); // 10 -> 20 -> 30 -> null

console.log(list);
