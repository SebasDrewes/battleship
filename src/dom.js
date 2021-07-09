import playerModule from './player';

const { playerTurn } = playerModule;

const displayBoards = (playerGameBoard, enemyGameBoard) => {
  const container = document.querySelector('#container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const createCell = (value, index, enableClick) => {
    const cell = document.createElement('div');
    cell.textContent = value;
    cell.classList.add('cell');
    cell.setAttribute('data', [index]);
    container.appendChild(cell);
    if (enableClick) {
      cell.addEventListener('click', () => {
        playerTurn(playerGameBoard, enemyGameBoard, index);
        displayBoards(playerGameBoard, enemyGameBoard);
      });
    }
  };
  for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
    createCell(playerGameBoard.gameBoard[i], i, false);
  }
  for (let i = 0; i < enemyGameBoard.gameBoard.length; i += 1) {
    createCell(enemyGameBoard.gameBoard[i], i, true);
  }
};

export default {
  displayBoards,
};
