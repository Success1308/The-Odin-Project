// Import the HashMap class
import { HashMap } from "./HashMap.js";

// Create a new instance of HashMap
const test = new HashMap();

// Populate the hash map
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// Check the length of the hash map
console.log("Length:", test.length());

// Overwrite a few nodes
test.set("apple", "green");
test.set("banana", "greenish-yellow");
console.log("Updated apple:", test.get("apple"));
console.log("Updated banana:", test.get("banana"));

// Add a new node to exceed the load factor and trigger resizing
test.set("moon", "silver");

// Check the length and verify the nodes after resizing
console.log("Length after adding moon:", test.length());
console.log("Moon:", test.get("moon"));

// Test other methods
console.log("Has apple:", test.has("apple"));
console.log("Has zebra:", test.has("zebra"));

console.log("Remove dog:", test.remove("dog"));
console.log("Remove cat:", test.remove("cat"));

console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

console.log("Clear hash map");
test.clear();
console.log("Length after clear:", test.length());
console.log("Keys after clear:", test.keys());
console.log("Values after clear:", test.values());
