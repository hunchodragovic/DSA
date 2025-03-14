class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// //

const root = new BinaryTreeNode(10);
root.left = new BinaryTreeNode(5);
root.right = new BinaryTreeNode(15);

console.log(root);
