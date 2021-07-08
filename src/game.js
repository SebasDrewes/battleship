import gameBoardModule from './gameBoard';
import playerModule from './player';
import shipModule from './shipFactory';

const { GameBoard } = gameBoardModule;
const { player } = playerModule;
const { shipFactory } = shipModule;
const createNewGame = (() => {
  const playerGameBoard = GameBoard();
  const enemyGameBoard = GameBoard();

  playerGameBoard.placeShip(0, 5, 'horizontal');
  enemyGameBoard.placeShip(0, 5, 'horizontal');
  playerGameBoard.placeShip(10, 4, 'vertical');
  enemyGameBoard.placeShip(10, 4, 'vertical');
  playerGameBoard.placeShip(7, 3, 'horizontal');
  enemyGameBoard.placeShip(7, 3, 'horizontal');
  playerGameBoard.placeShip(36, 3, 'vertical');
  enemyGameBoard.placeShip(36, 3, 'vertical');
  playerGameBoard.placeShip(96, 2, 'horizontal');
  enemyGameBoard.placeShip(96, 2, 'horizontal');

  return {
    playerGameBoard, enemyGameBoard,
  };
});

export default {
  createNewGame,
};
