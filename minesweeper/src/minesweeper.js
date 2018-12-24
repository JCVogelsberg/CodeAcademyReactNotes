// Dynamically generate player's board
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


// Dynamically generate bomb board
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

    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  return board;
};

// Print out the game board
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



/*
Questions for the Future:

- How might you improve the generateBombBoard() function so that duplicate
bombs aren't added to squares that already contain bombs?

- We have a function that generates the player board. How will a player
actually interact with this board?

- Minesweeper will inform you if there is a bomb adjacent to the square you
click (if it doesn't contain a bomb itself). How might you implement this
functionality into the game?








*/
























