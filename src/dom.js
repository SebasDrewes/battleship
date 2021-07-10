import playerModule from './player';

const { playerTurn } = playerModule;
const container = document.querySelector('#container');

const displayBoards = (playerGameBoard, enemyGameBoard) => {
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
let position = 'horizontal';
const changeposition = () => {
  if (position === 'horizontal') {
    position = 'vertical';
  } else {
    position = 'horizontal';
  }
};
const placeShipsBoard = (playerGameBoard, length) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const createCell = (value, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = value;
    cell.setAttribute('data', [index]);
    container.appendChild(cell);
    // to do, cambiar 5 por length
    cell.addEventListener('click', () => {
      playerGameBoard.placeShip(index, length, position);
      placeShipsBoard(playerGameBoard, length);
      console.log(playerGameBoard);
    });
    cell.addEventListener('mouseover', () => {
      const cells = document.querySelectorAll('.cell');
      if (position === 'horizontal') {
        for (let i = 0; i < cells.length; i += 1) {
          if (cells[i].getAttribute('data') === index.toString()) {
            for (let j = 0; j < length; j += 1) {
              cells[i + j].classList.add('hoverCell');
            }
          }
        }
      } else {
        for (let i = 0; i < cells.length; i += 1) {
          if (cells[i].getAttribute('data') === index.toString()) {
            for (let j = 0; j < length * 10; j += 10) {
              cells[i + j].classList.add('hoverCell');
            }
          }
        }
      }
    });
    cell.addEventListener('mouseleave', () => {
      const cells = document.querySelectorAll('.cell');
      cells.forEach((item) => item.classList.remove('hoverCell'));
    });
  };
  for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
    createCell(playerGameBoard.gameBoard[i], i);
  }
};
const change = document.querySelector('#change');
change.addEventListener('click', changeposition);
export default {
  displayBoards, placeShipsBoard,
};
