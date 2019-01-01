class Game {
  constructor(numberOfRows,numberOfColumns,numberOfBombs) {
      this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex,columnIndex) {
    this._board.flipTile(rowIndex,columnIndex);
    if ( this._board.playerBoard[rowIndex][columnIndex] === 'B' ) {
      console.log('Game Over! Final Board:');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('Congratulations, you won!');
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}


class Board {
  constructor(numberOfRows,numberOfColumns,numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = (numberOfRows * numberOfColumns);
    this._playerBoard = Board.generateplayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  // Function to allow user to flip a tile
  flipTile (rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles --;
  }

  // Function to display adjacent bombs
  getNumberOfNeighborBombs (rowIndex, columnIndex) {
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
      const numberOfRows = this._bombBoard.length;
      const numberOfColumns = this._bombBoard[0].length;
      let numberOfBombs = 0;

      neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if (
          neighborRowIndex >= 0 &&
          neighborRowIndex < numberOfRows &&
          neighborColumnIndex >= 0 &&
          neighborColumnIndex < numberOfColumns
        ) {
          if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            numberOfBombs++;
          }
        }
      });
      return numberOfBombs;
  }

  // Function to check if any 'safe' tiles remain
  hasSafeTiles() {
      return this._numberOfTiles !== this._numberOfBombs;
  }

  // Function to print out the game board
  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  // Function to dynamically generate player's board
  static generateplayerBoard(numberOfRows, numberOfColumns) {
    const board = [];

    for (let i = 0; i < numberOfRows; i++) {
      const row = [];
      for (let j = 0; j < numberOfColumns; j++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  // Function to dynamically generate bomb board
  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
      const randomRowIndex = Math.floor(Math.random() * numberOfRows);
      const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  }
};



const g = new Game(5,5,25);
g.playMove(0,0);
g.playMove(0,1);
g.playMove(0,2);
g.playMove(0,3);
g.playMove(0,4);
