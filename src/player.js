import myModule from './gameBoard';
// mock variables
const { GameBoard } = myModule;
const playerGameBoard = GameBoard();
const enemyGameBoard = GameBoard();
playerGameBoard.placeShip(0, 5, 'horizontal');
enemyGameBoard.placeShip(0, 5, 'horizontal');
//
const player = (() => {
  const takeTurn = (index) => {
    // player play
    enemyGameBoard.receiveAttack(index);
    // pc play
    const randomIndex = /* Math.floor(Math.random() * 100) */4;

    playerGameBoard.receiveAttack(randomIndex);
  };

  return {
    takeTurn, playerGameBoard, enemyGameBoard,
  };
});
export default {
  player,
};
