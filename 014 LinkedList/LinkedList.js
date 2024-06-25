// LinkedList.js
import { Node } from "./Node";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
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
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
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
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
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
    let result = "";
    let current = this.headNode;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(value, index) {
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
    if (index === 0 && this.headNode) {
      this.headNode = this.headNode.nextNode;
      return;
    }
    const previous = this.at(index - 1);
    if (!previous || !previous.nextNode) return;
    previous.nextNode = previous.nextNode.nextNode;
  }
}
