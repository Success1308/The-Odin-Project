class HashMap {
  constructor(initialCapacity = 16) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.size = 0;
  }

  // Hash function
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }
    return hashCode;
  }

  // Set a key-value pair
  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];

    // Check if the key already exists in the bucket
    for (let entry of bucket) {
      if (entry[0] === key) {
        entry[1] = value;
        return;
      }
    }

    // Add new key-value pair
    bucket.push([key, value]);
    this.size++;

    // Check load factor and resize if necessary
    if (this.size / this.buckets.length > 0.75) {
      this.resize(this.buckets.length * 2);
    }
  }

  // Get a value by key
  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry[0] === key) {
        return entry[1];
      }
    }

    return null;
  }

  // Check if a key exists
  has(key) {
    return this.get(key) !== null;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  // Get the number of stored keys
  length() {
    return this.size;
  }

  // Clear all entries
  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }

  // Get all keys
  keys() {
    const keys = [];
    for (let bucket of this.buckets) {
      for (let entry of bucket) {
        keys.push(entry[0]);
      }
    }
    return keys;
  }

  // Get all values
  values() {
    const values = [];
    for (let bucket of this.buckets) {
      for (let entry of bucket) {
        values.push(entry[1]);
      }
    }
    return values;
  }

  // Get all entries
  entries() {
    const entries = [];
    for (let bucket of this.buckets) {
      for (let entry of bucket) {
        entries.push(entry);
      }
    }
    return entries;
  }

  // Resize the hash map
  resize(newCapacity) {
    const oldBuckets = this.buckets;
    this.buckets = new Array(newCapacity).fill(null).map(() => []);
    this.size = 0;

    for (let bucket of oldBuckets) {
      for (let entry of bucket) {
        this.set(entry[0], entry[1]);
      }
    }
  }
}

// Export the HashMap class as an ES6 module
export { HashMap };
