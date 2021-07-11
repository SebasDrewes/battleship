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

// position default horizontal
// funcion para swap position
let position = 'horizontal';
const changeposition = () => {
  if (position === 'horizontal') {
    position = 'vertical';
  } else {
    position = 'horizontal';
  }
};
const placeShipsBoard = (playerGameBoard, length) => {
  // si existen, se borran todas las celdas
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const createCell = (value, index) => {
    const cell = document.createElement('div');
    // array con index invalidos/invisibles para cortar horizontal
    const invalidIndexArray = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
    // funcion para comprar newIndexs con indexInvalidos
    function findCommonElements(arr1, arr2) {
      return arr1.some((item) => arr2.includes(item));
    }
    cell.setAttribute('data', [index]);
    cell.classList.add('cellHidden');
    cell.classList.add('cell');
    cell.textContent = value;
    container.appendChild(cell);
    if (invalidIndexArray.includes(index) === false) {
      // si la celda es valida, se borra hidden
      // y se agrega eventListener
      cell.classList.remove('cellHidden');
      cell.addEventListener('click', () => {
        // al hacer click, se inserta ship en los index correspondientes
        playerGameBoard.placeShip(index, length, position);
        placeShipsBoard(playerGameBoard, length);
        // se agregan indexs usados al array de invalid
        for (let i = index; i < index + length; i += 1) {
          invalidIndexArray.push(i);
        }
        // loop para cambiar background de ships ocupados
        const shipCells = document.querySelectorAll('.cell');
        for (let c = 0; c < shipCells.length; c += 1) {
          if (shipCells[c].textContent !== '') {
            shipCells[c].classList.add('cellShip');
          }
        }
      });
      // eventlistener para cambiar color de posible ship placement
      cell.addEventListener('mouseover', () => {
        const cells = document.querySelectorAll('.cell');
        // se hace un nuevo array, para comprar con invalidarrayglobal
        const newIndexArray = [];
        if (position === 'horizontal') {
          for (let i = 0; i < cells.length; i += 1) {
            if (cells[i].getAttribute('data') === index.toString()) {
              for (let j = 0; j < length; j += 1) {
                // se pushean indexs correspondientes a nuevo posible ship
                if (newIndexArray.includes(i + j) === false) {
                  newIndexArray.push(i + j);
                }
              }
              for (let y = 0; y < length; y += 1) {
                // si algun index del posible ship, coincide con algun invalidindexs,
                // no se cambia el color del background
                const validHover = newIndexArray.every((item) => cells[item] !== undefined && cells[item].textContent === '');
                if (findCommonElements(invalidIndexArray, newIndexArray) === false
                  && validHover) {
                  if (cells[i + y]) {
                    cells[i + y].classList.add('hoverCell');
                  }
                } else {
                  // si es invalid, se agrega cursor pointer not-allowed
                  cells[i].classList.add('invalidCell');
                }
              }
            }
          }
        } else {
          // misma logica para posicion vertical
          // con loops diferentes
          for (let i = 0; i < cells.length; i += 1) {
            if (cells[i].getAttribute('data') === index.toString()) {
              for (let j = 0; j < length * 11; j += 11) {
                if (newIndexArray.includes(i + j) === false) {
                  newIndexArray.push(i + j);
                }
              }
              for (let y = 0; y < length * 11; y += 11) {
                const validHover = newIndexArray.every((item) => cells[item] !== undefined && cells[item].textContent === '');
                if (findCommonElements(invalidIndexArray, newIndexArray) === false
                && validHover) {
                  if (cells[i + y]) {
                    cells[i + y].classList.add('hoverCell');
                  }
                } else {
                  cells[i].classList.add('invalidCell');
                }
              }
            }
          }
        }
      });
      // event listener para eliminar background color
      cell.addEventListener('mouseleave', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((item) => item.classList.remove('hoverCell'));
        cells.forEach((item) => item.classList.remove('invalidCell'));
      });
    }
  };
  // main loop para crear gameBoard grid
  for (let i = 0; i < playerGameBoard.gameBoard.length; i += 1) {
    createCell(playerGameBoard.gameBoard[i], i);
  }
};
// funcion swap position
const change = document.querySelector('#change');
change.addEventListener('click', changeposition);
export default {
  displayBoards, placeShipsBoard,
};
