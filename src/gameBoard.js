import shipModule from './shipFactory';

const { shipFactory } = shipModule;

const GameBoard = () => {
  const shipList = [];
  const gameBoard = ['', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', ''];
  // cuando un index del gameBoard se ocupa, se agrega a invalidIndex
  const invalidIndexArray = [];
  const placeShip = (index, length, position) => {
    // guarda los nuevos indexs seleccionados
    console.log(index);
    console.log(index + length);
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
        if (index + length < 100) {
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
      for (let u = index; u < index + length * 10; u += 10) {
        if (newIndexArray.includes(u) === false) {
          newIndexArray.push(u);
        }
      }
      if (findCommonElements(invalidIndexArray, newIndexArray) === false) {
        // if statement para no sobrepasar maximo index de gameBoard
        if (index + length * 10 < 110) {
          const newShip = shipFactory(index, length, position);
          shipList.push(newShip);
          for (let j = index; j < index + length * 10; j += 10) {
            if (invalidIndexArray.includes(j) === false) {
              invalidIndexArray.push(j);
            }
          }
          for (let i = 0; i < newShip.shipLength * 10; i += 10) {
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
