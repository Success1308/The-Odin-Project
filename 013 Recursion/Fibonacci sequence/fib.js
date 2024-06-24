// Iterative Approach

// First, let's create a function fibs that generates the Fibonacci sequence using iteration:

function fibs(n) {
  let sequence = [];
  if (n >= 1) {
    sequence.push(0);
  }
  if (n >= 2) {
    sequence.push(1);
  }
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Testing the function
console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Recursive Approach

// Now, let's implement the recursive version fibsRec to generate the Fibonacci sequence:

function fibsRec(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let sequence = fibsRec(n - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }
}

// Testing the function
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Testing Both Functions

// Let's test both functions with various inputs:

console.log(fibs(1)); // Output: [0]
console.log(fibs(2)); // Output: [0, 1]
console.log(fibs(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log(fibsRec(1)); // Output: [0]
console.log(fibsRec(2)); // Output: [0, 1]
console.log(fibsRec(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
