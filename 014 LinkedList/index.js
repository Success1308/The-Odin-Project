// index.js
import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log(list.size()); // Output: 4
console.log(list.head().value); // Output: 0
console.log(list.tail().value); // Output: 3
console.log(list.at(2).value); // Output: 2

console.log(list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

list.pop();
console.log(list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> null

console.log(list.contains(2)); // Output: true
console.log(list.find(2)); // Output: 2

list.insertAt(1.5, 2);
console.log(list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 1.5 ) -> ( 2 ) -> null

list.removeAt(2);
console.log(list.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> null
