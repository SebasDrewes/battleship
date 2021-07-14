import shipModule from './shipFactory';

const { shipFactory } = shipModule;

const GameBoard = () => {
  const shipList = [];
  // al gameboard se le agrego una fila 11, para cortar posibilidad
  // de colocar ships fuera de una unica fila horizontal
  const gameBoard = ['', '', '', '', '', '', '', '', '', '',
    10, '', '', '', '', '', '', '', '', '',
    '', 21, '', '', '', '', '', '', '', '',
    '', '', 32, '', '', '', '', '', '', '',
    '', '', '', 43, '', '', '', '', '', '',
    '', '', '', '', 54, '', '', '', '', '',
    '', '', '', '', '', 65, '', '', '', '',
    '', '', '', '', '', '', 76, '', '', '',
    '', '', '', '', '', '', '', 87, '', '',
    '', '', '', '', '', '', '', '', 98, '',
    '', '', '', '', '', '', '', '', '', 109];
  // cuando un index del gameBoard se ocupa, se agrega a invalidIndex
  // se agregan index numero 11, para inhabilitar posicionar barcos horizontal
  const invalidIndexArray = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109];
  const placeShip = (index, length, position) => {
    // guarda los nuevos indexs seleccionados
    const newIndexArray = [];
    // si los nuevos indexs estan en los invalid, no ejecuta placeship
    function findCommonElements(arr1, arr2) {
      return arr1.some((item) => arr2.includes(item));
    }
    // segun la posicion, se contabilizan indexes
    if (position === 'horizontal') {
      // se pushean los indexes del nuevo ship a newArray
      for (let u = index; u < index + length; u += 1) {
        if (newIndexArray.includes(u) === false) {
          newIndexArray.push(u);
        }
      }
      // check si nuevos index son validos
      if (findCommonElements(invalidIndexArray, newIndexArray) === false) {
        // if statement para agregar numero mayor a index
        if (index + length < 120) {
          const newShip = shipFactory(index, length, position);
          shipList.push(newShip);
          for (let j = index; j < index + length; j += 1) {
            if (invalidIndexArray.includes(j) === false) {
              invalidIndexArray.push(j);
            }
          }
          for (let i = 0; i < newShip.shipLength; i += 1) {
            gameBoard[index + i] = index;
          }
          newShip.shipNumber = index;
        }
      }
    } else if (position === 'vertical') {
      // si la position es vertical, la cuenta del for loop es diferente
      for (let u = index; u < index + length * 11; u += 11) {
        if (newIndexArray.includes(u) === false) {
          newIndexArray.push(u);
        }
      }
      if (findCommonElements(invalidIndexArray, newIndexArray) === false) {
        // if statement para no sobrepasar maximo index de gameBoard
        if (index + length * 11 < 120) {
          const newShip = shipFactory(index, length, position);
          shipList.push(newShip);
          for (let j = index; j < index + length * 11; j += 11) {
            if (invalidIndexArray.includes(j) === false) {
              invalidIndexArray.push(j);
            }
          }
          for (let i = 0; i < newShip.shipLength * 11; i += 11) {
            gameBoard[index + i] = index;
          }
          newShip.shipNumber = index;
        }
      }
    }
  };

  const receiveAttack = (index) => {
    // si gameBoard coordinate tiene un barco,
    // lo selecciona y resta hitpoint correspondiente
    if (gameBoard[index] !== '') {
      for (let i = 0; i < shipList.length; i += 1) {
        if (shipList[i].shipNumber === gameBoard[index]) {
          gameBoard[index] = 'hit';
          shipList[i].hit(index);
        }
      }
      // si no hay barco, registra no hit;
    } else {
      gameBoard[index] = 'noHit';
    }
  };
  const allShipsSunked = () => {
    if (shipList.every((ship) => ship.isSunk() === true)) {
      return true;
    }
    return false;
  };
  const placeShipsRandomly = () => {
    // selecciona numero aleatorio entre 1 y 5
    const randomBoard = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    // elije entre diferentes gameboards posibles
    switch (randomBoard) {
      case 1:
        placeShip(0, 5, 'horizontal');
        placeShip(44, 4, 'vertical');
        placeShip(7, 3, 'horizontal');
        placeShip(36, 3, 'vertical');
        placeShip(96, 2, 'horizontal');
        break;
      case 2:
        placeShip(0, 5, 'vertical');
        placeShip(47, 4, 'vertical');
        placeShip(17, 3, 'horizontal');
        placeShip(74, 3, 'vertical');
        placeShip(93, 2, 'horizontal');
        break;
      case 3:
        placeShip(27, 5, 'horizontal');
        placeShip(58, 4, 'vertical');
        placeShip(12, 3, 'horizontal');
        placeShip(83, 3, 'horizontal');
        placeShip(99, 2, 'horizontal');
        break;
      case 4:
        placeShip(16, 5, 'vertical');
        placeShip(56, 4, 'vertical');
        placeShip(52, 3, 'vertical');
        placeShip(12, 3, 'vertical');
        placeShip(8, 2, 'vertical');
        break;
      case 5:
        placeShip(78, 5, 'horizontal');
        placeShip(34, 4, 'horizontal');
        placeShip(50, 3, 'horizontal');
        placeShip(15, 3, 'horizontal');
        placeShip(95, 2, 'horizontal');
        break;
      default:
        placeShip(0, 5, 'horizontal');
        placeShip(44, 4, 'vertical');
        placeShip(7, 3, 'horizontal');
        placeShip(36, 3, 'vertical');
        placeShip(96, 2, 'horizontal');
    }
  };
  return {
    placeShip, receiveAttack, gameBoard, shipList, allShipsSunked, placeShipsRandomly,
  };
};

export default {
  GameBoard,
};
