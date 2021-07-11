import shipModule from './shipFactory';

const { shipFactory } = shipModule;

const GameBoard = () => {
  const shipList = [];
  // al gameboard se le agrego una fila 11, para cortar posibilidad
  // de colocar ships fuera de una unica fila horizontal
  const gameBoard = ['', '', '', '', '', '', '', '', '', '',
    '10', '', '', '', '', '', '', '', '', '',
    '', '21', '', '', '', '', '', '', '', '',
    '', '', '32', '', '', '', '', '', '', '',
    '', '', '', '43', '', '', '', '', '', '',
    '', '', '', '', '54', '', '', '', '', '',
    '', '', '', '', '', '65', '', '', '', '',
    '', '', '', '', '', '', '76', '', '', '',
    '', '', '', '', '', '', '', '87', '', '',
    '', '', '', '', '', '', '', '', '98', '',
    '', '', '', '', '', '', '', '', '', '109'];
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
        // if statement para no sobrepasar maximo index de gameBoard
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
        console.log(shipList);
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
  return {
    placeShip, receiveAttack, gameBoard, shipList, allShipsSunked,
  };
};

export default {
  GameBoard,
};
