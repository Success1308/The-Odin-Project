import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

// Helper function to generate random array
const generateRandomArray = (size, max = 100) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
};


// Driver script
const main = () => {
  // Create a binary search tree from an array of random numbers < 100
  const randomArray = generateRandomArray(15, 100);
  const tree = new Tree(randomArray);

  console.log("Initial Tree:");
  prettyPrint(tree.root);

  // Confirm that the tree is balanced by calling isBalanced
  console.log("Is the tree balanced?", tree.isBalanced());

  // Print out all elements in level, pre, post, and in order
  console.log("Level Order:", tree.levelOrder());
  console.log("In Order:", tree.inOrder());
  console.log("Pre Order:", tree.preOrder());
  console.log("Post Order:", tree.postOrder());

  // Unbalance the tree by adding several numbers > 100
  const unbalancingNumbers = [150, 200, 250];
  unbalancingNumbers.forEach((num) => tree.insert(num));

  console.log("Unbalanced Tree:");
  prettyPrint(tree.root);

  // Confirm that the tree is unbalanced by calling isBalanced
  console.log("Is the tree balanced?", tree.isBalanced());

  // Balance the tree by calling rebalance
  tree.rebalance();

  console.log("Rebalanced Tree:");
  prettyPrint(tree.root);

  // Confirm that the tree is balanced by calling isBalanced
  console.log("Is the tree balanced?", tree.isBalanced());

  // Print out all elements in level, pre, post, and in order
  console.log("Level Order:", tree.levelOrder());
  console.log("In Order:", tree.inOrder());
  console.log("Pre Order:", tree.preOrder());
  console.log("Post Order:", tree.postOrder());
};

main();
