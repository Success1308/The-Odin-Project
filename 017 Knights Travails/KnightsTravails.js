function knightMoves(start, end) {
  // Define knight's moves relative to its position
  const knightMoves = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  // Function to check if a position is within the 8x8 board
  function isValidPosition(pos) {
    const [x, y] = pos;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // BFS initialization
  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const [currX, currY] = path[path.length - 1];

    // If we reach the end position, return the path
    if (currX === end[0] && currY === end[1]) {
      return path;
    }

    // Explore all possible knight moves
    for (let move of knightMoves) {
      const [moveX, moveY] = move;
      const newX = currX + moveX;
      const newY = currY + moveY;
      const newPosition = [newX, newY];

      if (
        isValidPosition(newPosition) &&
        !visited.has(newPosition.toString())
      ) {
        visited.add(newPosition.toString());
        const newPath = [...path, newPosition];
        queue.push(newPath);
      }
    }
  }

  // If no path found (should not reach here given problem constraints)
  return null;
}

// Function to print the result in the required format
function printKnightMoves(start, end) {
  const path = knightMoves(start, end);
  if (path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((step) => console.log(step));
  } else {
    console.log("No path found.");
  }
}

// Examples:
printKnightMoves([0, 0], [1, 2]);
printKnightMoves([0, 0], [3, 3]);
printKnightMoves([3, 3], [0, 0]);
printKnightMoves([0, 0], [7, 7]);
printKnightMoves([3, 3], [4, 3]);
