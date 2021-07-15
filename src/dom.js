import playerModule from './player';

const { playerTurn } = playerModule;
const playerBoard = document.querySelector('#playerBoard');
const enemyBoard = document.querySelector('#enemyBoard');
const tuRadar = document.querySelector('#tuRadar');
const enemyRadar = document.querySelector('#enemyRadar');
const enemyRadarMobile = document.querySelector('#enemyRadarMobile');
const text = document.querySelector('#text');
const change = document.querySelector('#change');
const title = document.querySelector('#title');
const puertaCorrediza = document.querySelector('#puertaCorrediza');
const newGame = document.querySelector('#newGame');
const winWrap = document.querySelector('#winWrap');
const mediaFunction = (windowMedia) => {
  if (windowMedia.matches) { // If media query matches
    enemyRadarMobile.style.display = 'block';
    title.style.fontSize = '2.5em';
    tuRadar.style.display = 'block';
  } else {
    tuRadar.style.display = 'block';
    enemyRadar.style.display = 'block';
  }
};
const mediaFunctionWin = (windowMedia) => {
  if (windowMedia.matches) { // If media query matches
    setTimeout(() => {
      window.location.reload();
    }, 6000);
  } else {
    setTimeout(() => {
      puertaCorrediza.style.width = '100%';
      title.textContent = 'Batalla Naval';
    }, 5000);
    setTimeout(() => {
      window.location.reload();
    }, 6000);
  }
};

const windowMedia = window.matchMedia('(max-width: 1050px)');
// funcion para comprar newIndexs con indexInvalidos
function findCommonElements(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

const displayBoards = (playerGameBoard, enemyGameBoard) => {
  change.style.display = 'none';
  enemyBoard.style.display = 'grid';
  while (playerBoard.firstChild) {
    playerBoard.removeChild(playerBoard.firstChild);
  }
  while (enemyBoard.firstChild) {
    enemyBoard.removeChild(enemyBoard.firstChild);
  }
  const createCell = (value, index, enableClick) => {
    const invalidIndexArray = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
    const cell = document.createElement('div');
    cell.textContent = value;
    cell.classList.add('cellHittable');
    cell.classList.add('cellHidden');
    cell.setAttribute('data', [index]);
    if (invalidIndexArray.includes(index) === false) {
      // si la celda es valida, se borra hidden
      // y se agrega eventListener
      cell.classList.remove('cellHidden');
      if (enableClick) {
        enemyBoard.appendChild(cell);
        cell.addEventListener('click', () => {
          playerTurn(playerGameBoard, enemyGameBoard, index);
          displayBoards(playerGameBoard, enemyGameBoard);
          if (cell.textContent.match(/^[0-9]+$/) !== null) {
            for (let i = 0; i < enemyGameBoard.shipList.length; i += 1) {
              if (cell.textContent === enemyGameBoard.shipList[i].shipNumber.toString()
              && enemyGameBoard.shipList[i].isSunk() === true) {
                title.textContent = '¡Hundiste un barco enemigo!';
                break;
              } else {
                title.textContent = '¡Le diste a un barco enemigo!';
              }
            }
          } else if (cell.textContent === '') {
            title.textContent = '¡Fallaste el tiro!';
          }
          if (enemyGameBoard.allShipsSunked()) {
            title.textContent = 'Ganaste!!!';
            winWrap.style.display = 'block';
            mediaFunctionWin(windowMedia);
          } else if (playerGameBoard.allShipsSunked()) {
            title.textContent = 'Perdiste!';
            winWrap.style.display = 'block';
            mediaFunctionWin(windowMedia);
          }
        });
        cell.addEventListener('mouseover', () => {
          cell.classList.add('hoverCell');
        });
        cell.addEventListener('mouseleave', () => {
          cell.classList.remove('hoverCell');
        });
        if (cell.textContent === 'hit') {
          cell.classList.add('cellShipHitted');
        } else if (cell.textContent === 'noHit') {
          cell.classList.add('cellMiss');
        }
      } else {
        playerBoard.appendChild(cell);
        cell.classList.remove('cellHittable');
        cell.classList.add('cellFriendly');
        if (cell.textContent.match(/^[0-9]+$/) !== null) {
          cell.classList.add('cellShip');
        } else if (cell.textContent === 'hit') {
          cell.classList.add('cellShipHittedFriendly');
        } else if (cell.textContent === 'noHit') {
          cell.classList.add('cellMissFriendly');
        }
      }
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
const placeShipsBoard = (playerGameBoard, enemyGameBoard, length) => {
  // si existen, se borran todas las celdas
  while (playerBoard.firstChild) {
    playerBoard.removeChild(playerBoard.firstChild);
  }
  const createCell = (value, index) => {
    const cell = document.createElement('div');
    // array con index invalidos/invisibles para cortar horizontal
    const invalidIndexArray = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
    cell.setAttribute('data', [index]);
    cell.classList.add('cellHidden');
    cell.classList.add('cell');
    cell.textContent = value;
    playerBoard.appendChild(cell);
    if (invalidIndexArray.includes(index) === false) {
      // si la celda es valida, se borra hidden
      // y se agrega eventListener
      cell.classList.remove('cellHidden');
      cell.addEventListener('click', () => {
        // al hacer click, se inserta ship en los index correspondientes
        playerGameBoard.placeShip(index, length, position);
        // una vez colocado barco correctamente,
        // llama la funcion nuevamente, con length segun cantidad de barcos;
        switch (playerGameBoard.shipList.length) {
          case 1:
            placeShipsBoard(playerGameBoard, enemyGameBoard, 4);
            break;
          case 2:
            placeShipsBoard(playerGameBoard, enemyGameBoard, 3);
            break;
          case 3:
            placeShipsBoard(playerGameBoard, enemyGameBoard, 3);
            break;
          case 4:
            placeShipsBoard(playerGameBoard, enemyGameBoard, 2);
            break;
          case 5:
            displayBoards(playerGameBoard, enemyGameBoard);
            title.textContent = 'Esperando instrucciones...';
            text.style.display = 'none';
            mediaFunction(windowMedia);
            break;
          default:
            placeShipsBoard(playerGameBoard, enemyGameBoard, 4);
        }
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
change.addEventListener('click', changeposition);
// footerGitHub
const github = document.querySelector('#github');
github.addEventListener('click', () => {
  window.open('https://github.com/SebasDrewes/', '_blank');
});

newGame.addEventListener('click', () => {
  puertaCorrediza.style.width = '0%';
  newGame.style.display = 'none';
});
export default {
  displayBoards, placeShipsBoard,
};
