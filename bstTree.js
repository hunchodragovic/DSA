class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(root, key) {
    if (root === null) {
      return new Node(key);
    }
    if (key < root.key) {
      root.left = this.insert(root.left, key);
    } else {
      root.right = this.insert(root.right, key);
    }
    return root;
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      process.stdout.write(root.key + " ");
      this.inorder(root.right);
    }
  }

  search(root, key) {
    if (root === null || root.key === key) {
      return root;
    }
    if (key < root.key) {
      return this.search(root.left, key);
    }
    return this.search(root.right, key);
  }
}

// Creating the BST shown in the image
const bst = new BST();
bst.root = bst.insert(null, 8);
bst.insert(bst.root, 3);
bst.insert(bst.root, 10);
bst.insert(bst.root, 1);
bst.insert(bst.root, 6);
bst.insert(bst.root, 14);
bst.insert(bst.root, 4);
bst.insert(bst.root, 7);
bst.insert(bst.root, 13);

// Performing inorder traversal to verify the BST structure
console.log("Inorder Traversal of the BST:");
bst.inorder(bst.root);

// Searching for numbers 3, 9, and 10
console.log(
  "\nSearching for 3:",
  bst.search(bst.root, 3) ? "Found" : "Not Found"
);
console.log(
  "Searching for 9:",
  bst.search(bst.root, 9) ? "Found" : "Not Found"
);
console.log(
  "Searching for 10:",
  bst.search(bst.root, 10) ? "Found" : "Not Found"
);
