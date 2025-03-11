class Node {
  constructor(value) {
    this.value = value; // The data stored in the node
    this.next = null; // Pointer to the next node
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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
    if (!this.head) return undefined; // If list is empty, return undefined

    let current = this.head;
    let newTail = current;

    while (current.next) {
      // Traverse to the second-last node
      newTail = current;
      current = current.next;
    }

    newTail.next = null; // Remove last node by setting newTail's next to null
    this.tail = newTail; // Update tail to newTail
    this.length--;

    if (this.length === 0) {
      // If the list is now empty, reset head & tail
      this.head = null;
      this.tail = null;
    }

    return current.value; // Return removed value
  }
}
let list = new SinglyLinkedList();

list.push(10); // 10 -> null
list.push(20); // 10 -> 20 -> null
list.push(30); // 10 -> 20 -> 30 -> null

console.log(list);
list.pop();
list.pop();
list.pop(); // 10 -> 20 -> null
console.log(list);
