import gameBoardModule from './gameBoard';
import displayBoardsModule from './dom';

const { placeShipsBoard } = displayBoardsModule;
const { GameBoard } = gameBoardModule;
// main game loop
const playerGameBoard = GameBoard();
const enemyGameBoard = GameBoard();

enemyGameBoard.placeShipsRandomly();

placeShipsBoard(playerGameBoard, enemyGameBoard, 5);
