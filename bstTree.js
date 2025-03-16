class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  } // Add this closing brace

  dfsPreOrder(node = this.root, data = []) {
    if (node === null) return data; // Base case: If node is null, return the collected data

    data.push(node.value); // Step 1: Visit the current node (Root)

    if (node.left) this.dfsPreOrder(node.left, data); // Step 2: Traverse the left subtree
    if (node.right) this.dfsPreOrder(node.right, data); // Step 3: Traverse the right subtree

    return data; // Return the collected values
  }
}
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log("Pre-order traversal:", bst.dfsPreOrder()); // [10, 5, 2, 7, 15, 12, 20]
