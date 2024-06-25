import Node from "./Node.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(this.uniqueSortedArray(array));
  }

  uniqueSortedArray(array) {
    return [...new Set(array)].sort((a, b) => a - b);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root;
  }

  insert(value, node = this.root) {
    if (node === null) return new Node(value);

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  deleteItem(value, node = this.root) {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      node.data = this.minValue(node.right);
      node.right = this.deleteItem(node.data, node.right);
    }

    return node;
  }

  minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  find(value, node = this.root) {
    if (node === null) return null;

    if (value === node.data) return node;
    if (value < node.data) return this.find(value, node.left);
    return this.find(value, node.right);
  }

  levelOrder(callback) {
    const queue = [];
    const values = [];
    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      if (callback) {
        callback(node);
      } else {
        values.push(node.data);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!callback) return values;
  }

  inOrder(node = this.root, callback, values = []) {
    if (node === null) return values;

    this.inOrder(node.left, callback, values);
    if (callback) {
      callback(node);
    } else {
      values.push(node.data);
    }
    this.inOrder(node.right, callback, values);

    if (!callback) return values;
  }

  preOrder(node = this.root, callback, values = []) {
    if (node === null) return values;

    if (callback) {
      callback(node);
    } else {
      values.push(node.data);
    }
    this.preOrder(node.left, callback, values);
    this.preOrder(node.right, callback, values);

    if (!callback) return values;
  }

  postOrder(node = this.root, callback, values = []) {
    if (node === null) return values;

    this.postOrder(node.left, callback, values);
    this.postOrder(node.right, callback, values);
    if (callback) {
      callback(node);
    } else {
      values.push(node.data);
    }

    if (!callback) return values;
  }

  height(node) {
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node, current = this.root, depth = 0) {
    if (current === null) return -1;
    if (node.data === current.data) return depth;
    if (node.data < current.data) {
      return this.depth(node, current.left, depth + 1);
    }
    return this.depth(node, current.right, depth + 1);
  }

  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const values = this.inOrder();
    this.root = this.buildTree(values);
  }
}
