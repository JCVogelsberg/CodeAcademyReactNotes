// Function to dynamically generate player's board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];

  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

// Function to dynamically generate bomb board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    // This loop has the potential to place bombs on top of existing bombs
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
};

// Function to display adjacent bombs
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
      [-1,-1],
      [-1,0],
      [-1,1],
      [0,-1],
      [0,1],
      [1,-1],
      [1,0],
      [1,1]
    ];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (
        neighborRowIndex >= 0 &&
        neighborRowIndex <= numberOfRows &&
        neighborColumnIndex >= 0 &&
        neighborColumnIndex <= numberOfColumns
      ) {
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
};

// Function to allow user to flip a tile
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (bombBoard[rowIndex][columnIndex] === 'B') {
      playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    }
};

// Function to print out the game board
const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

// Display the Boards
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);


flipTile(playerBoard, bombBoard, 0, 1);
console.log('Updated Player Board: ');
printBoard(playerBoard);
