import myModule from './gameBoard';
// mock variables
const { GameBoard } = myModule;
const playerGameBoard = GameBoard();
const enemyGameBoard = GameBoard();
playerGameBoard.placeShip(0, 5, 'horizontal');
enemyGameBoard.placeShip(0, 5, 'horizontal');
//
let turn = 'player';
const player = (() => {
  const takeTurn = (index) => {
    // player play
    if (turn === 'player') {
      turn = 'computer';
      if (enemyGameBoard.gameBoard[index] === 'noHit') {
        turn = 'player';
      } else {
        enemyGameBoard.receiveAttack(index);
        if (enemyGameBoard.gameBoard[index] === 'hit') {
          turn = 'player';
        }
      }
    } else {
    // pc play
      turn = 'player';
      const randomIndex = /* Math.floor(Math.random() * 100); */ index;
      if (playerGameBoard.gameBoard[randomIndex] === 'noHit') {
        turn = 'computer';
      } else {
        playerGameBoard.receiveAttack(randomIndex);
        if (playerGameBoard.gameBoard[randomIndex] === 'hit') {
          turn = 'computer';
        }
      }
    }
  };

  return {
    takeTurn, playerGameBoard, enemyGameBoard, turn,
  };
});
export default {
  player,
};
