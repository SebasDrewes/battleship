import createNewGameModule from './game';

const { createNewGame } = createNewGameModule;
const displayBoards = () => {
  const container = document.querySelector('#container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const createCell = (index) => {
    const cell = document.createElement('div');
    cell.textContent = index;
    cell.classList.add('cell');
    container.appendChild(cell);
  };
  createNewGame().enemyGameBoard.gameBoard.forEach((index) => createCell(index));
};

export default {
  displayBoards,
};
