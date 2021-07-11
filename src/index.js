import gameBoardModule from './gameBoard';
import displayBoardsModule from './dom';

const { displayBoards } = displayBoardsModule;
const { placeShipsBoard } = displayBoardsModule;
const { GameBoard } = gameBoardModule;
// main game loop
const playerGameBoard = GameBoard();
const enemyGameBoard = GameBoard();
/* playerGameBoard.placeShip(0, 5, 'horizontal');
enemyGameBoard.placeShip(0, 5, 'horizontal');
playerGameBoard.placeShip(10, 4, 'vertical');
enemyGameBoard.placeShip(10, 4, 'vertical');
playerGameBoard.placeShip(7, 3, 'horizontal');
enemyGameBoard.placeShip(7, 3, 'horizontal');
playerGameBoard.placeShip(36, 3, 'vertical');
enemyGameBoard.placeShip(36, 3, 'vertical');
playerGameBoard.placeShip(96, 2, 'horizontal');
enemyGameBoard.placeShip(96, 2, 'horizontal'); */

// displayBoards(playerGameBoard, enemyGameBoard);
placeShipsBoard(playerGameBoard, 3);
