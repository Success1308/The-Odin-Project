// Import the HashSet class
import { HashSet } from "./HashSet.js";

// Create a new instance of HashSet
const testSet = new HashSet();

// Add keys to the set
testSet.add("apple");
testSet.add("banana");
testSet.add("carrot");

// Check size
console.log("Size:", testSet.size());

// Check for keys
console.log("Has apple:", testSet.has("apple"));
console.log("Has banana:", testSet.has("banana"));
console.log("Has dog:", testSet.has("dog"));

// Remove a key
console.log("Remove banana:", testSet.remove("banana"));
console.log("Has banana after remove:", testSet.has("banana"));

// Get all keys
console.log("Keys:", testSet.keys());

// Clear the set
testSet.clear();
console.log("Size after clear:", testSet.size());
