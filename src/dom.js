import createNewGameModule from './game';

const { playerGameBoard } = createNewGameModule;
const { enemyGameBoard } = createNewGameModule;
const { makePlay } = createNewGameModule;
const displayBoards = () => {
  const container = document.querySelector('#container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const createCell = (value, index) => {
    const cell = document.createElement('div');
    cell.textContent = value;
    console.log(value);
    console.log(index);
    cell.classList.add('cell');
    cell.setAttribute('data', [index]);
    container.appendChild(cell);
    cell.addEventListener('click', () => {
      makePlay(index);
      displayBoards();
    });
  };
  for (let i = 0; i < enemyGameBoard.gameBoard.length; i += 1) {
    createCell(enemyGameBoard.gameBoard[i], i);
  }
};

export default {
  displayBoards,
};
