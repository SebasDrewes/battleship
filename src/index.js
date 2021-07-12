import gameBoardModule from './gameBoard';
import displayBoardsModule from './dom';

const { placeShipsBoard } = displayBoardsModule;
const { GameBoard } = gameBoardModule;
// main game loop
const playerGameBoard = GameBoard();
const enemyGameBoard = GameBoard();

enemyGameBoard.placeShip(0, 5, 'horizontal');
enemyGameBoard.placeShip(10, 4, 'vertical');
enemyGameBoard.placeShip(7, 3, 'horizontal');
enemyGameBoard.placeShip(36, 3, 'vertical');
enemyGameBoard.placeShip(96, 2, 'horizontal');

placeShipsBoard(playerGameBoard, enemyGameBoard, 5);
