import { HashMap } from "./HashMap.js";

class HashSet {
  constructor() {
    this.map = new HashMap();
  }

  add(key) {
    this.map.set(key, true);
  }

  has(key) {
    return this.map.has(key);
  }

  remove(key) {
    return this.map.remove(key);
  }

  clear() {
    this.map.clear();
  }

  size() {
    return this.map.length();
  }

  keys() {
    return this.map.keys();
  }
}

// Export the HashSet class
export { HashSet };
