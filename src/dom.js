import createNewGameModule from './game';

const { createNewGame } = createNewGameModule;
const displayBoards = () => {
  const document = createElement('document');
  const container = document.querySelector('#container');
  const playerBoard = createNewGame().playerGameBoard.gameBoard;
  const createCell = (index) => {
    const cell = document.createElement('div');
    cell.textContent = index;
    container.appendChild(cell);
  };
  playerBoard.forEach((index) => createCell(index));
};

export default {
  displayBoards,
};
