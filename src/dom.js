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
    const invalidIndexArray = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
    function findCommonElements(arr1, arr2) {
      return arr1.some((item) => arr2.includes(item));
    }
    cell.setAttribute('data', [index]);
    cell.classList.add('cellHidden');
    cell.classList.add('cell');
    container.appendChild(cell);
    if (invalidIndexArray.includes(index) === false) {
      cell.classList.remove('cellHidden');
      cell.textContent = value;
      cell.addEventListener('click', () => {
        playerGameBoard.placeShip(index, length, position);
        placeShipsBoard(playerGameBoard, length);
        for (let i = index; i < index + length; i += 1) {
          invalidIndexArray.push(i);
        }
      });
      cell.addEventListener('mouseover', () => {
        const cells = document.querySelectorAll('.cell');
        if (position === 'horizontal') {
          const newIndexArray = [];
          for (let i = 0; i < cells.length; i += 1) {
            if (cells[i].getAttribute('data') === index.toString()) {
              for (let j = 0; j < length; j += 1) {
                if (newIndexArray.includes(i + j) === false) {
                  newIndexArray.push(i + j);
                }
                if (findCommonElements(invalidIndexArray, newIndexArray) === false) {
                  cells[i + j].classList.add('hoverCell');
                }
              }
            }
          }
        } else {
          for (let i = 0; i < cells.length; i += 1) {
            if (cells[i].getAttribute('data') === index.toString()) {
              for (let j = 0; j < length * 10; j += 10) {
                if (cells[i + j]) {
                  cells[i + j].classList.add('hoverCell');
                }
              }
            }
          }
        }
      });
      cell.addEventListener('mouseleave', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((item) => item.classList.remove('hoverCell'));
      });
    }
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
