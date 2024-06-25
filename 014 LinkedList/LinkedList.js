// LinkedList.js
import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    // Time complexity: O(n)
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    // Time complexity: O(1)
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    // Time complexity: O(n)
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    // Time complexity: O(1)
    return this.headNode;
  }

  tail() {
    // Time complexity: O(n)
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    // Time complexity: O(n)
    let current = this.headNode;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    // Time complexity: O(n)
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      const poppedNode = this.headNode;
      this.headNode = null;
      return poppedNode;
    }
    let current = this.headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const poppedNode = current.nextNode;
    current.nextNode = null;
    return poppedNode;
  }

  contains(value) {
    // Time complexity: O(n)
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    // Time complexity: O(n)
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    // Time complexity: O(n)
    let result = "";
    let current = this.headNode;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(value, index) {
    // Time complexity: O(n)
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const previous = this.at(index - 1);
    if (!previous) return;
    const newNode = new Node(value, previous.nextNode);
    previous.nextNode = newNode;
  }

  removeAt(index) {
    // Time complexity: O(n)
    if (index === 0 && this.headNode) {
      this.headNode = this.headNode.nextNode;
      return;
    }
    const previous = this.at(index - 1);
    if (!previous || !previous.nextNode) return;
    previous.nextNode = previous.nextNode.nextNode;
  }
}
