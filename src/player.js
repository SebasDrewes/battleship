import myModule from './gameBoard';
// mock variables
const { GameBoard } = myModule;
const playerGameBoard = GameBoard();
const enemyGameBoard = GameBoard();
playerGameBoard.placeShip(0, 5, 'horizontal');
enemyGameBoard.placeShip(0, 5, 'horizontal');
//
// global para ir intercalando en takeTurn
let turn = 'player';
const player = (() => {
  const takeTurn = (index) => {
    // player play
    // si el jugador es el player, ataca enemyBoard
    if (turn === 'player') {
      // si el index falla el tiro, se cambia de turno
      turn = 'computer';
      if (enemyGameBoard.gameBoard[index] === 'noHit') {
        // si el index seleccionado ya fue hitteado, se resetea el turno
        turn = 'player';
      } else {
        enemyGameBoard.receiveAttack(index);
        if (enemyGameBoard.gameBoard[index] === 'hit') {
          // si el index seleccionado ya fue hitteado, se resetea el turno
          turn = 'player';
        }
      }
    } else {
    // si el jugador es la pc, ataca playerBoard
      // si el index falla el tiro, se cambia de turno
      turn = 'player';
      // get random value from 0 to 99
      const randomIndex = /* Math.floor(Math.random() * 100); */ index;
      if (playerGameBoard.gameBoard[randomIndex] === 'noHit') {
        // si el index seleccionado ya fue hitteado, se resetea el turno
        turn = 'computer';
      } else {
        playerGameBoard.receiveAttack(randomIndex);
        if (playerGameBoard.gameBoard[randomIndex] === 'hit') {
          // si el index seleccionado ya fue hitteado, se resetea el turno
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
