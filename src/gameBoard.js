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
  const invalidIndexArray = [];
  const placeShip = (index, length, position) => {
    const newIndexArray = [];
    for (let u = index; u < index + length; u += 1) {
      if (newIndexArray.includes(u) === false) {
        newIndexArray.push(u);
      }
    }
    function findCommonElements(arr1, arr2) {
      return arr1.some((item) => arr2.includes(item));
    }
    if (findCommonElements(invalidIndexArray, newIndexArray) === false) {
      console.log(1);
      if (gameBoard[index] === '') {
        const newShip = shipFactory(index, length, position);
        shipList.push(newShip);
        for (let j = index; j < index + length; j += 1) {
          if (invalidIndexArray.includes(j) === false) {
            invalidIndexArray.push(j);
          }
        }
        if (position === 'horizontal') {
          for (let i = 0; i < newShip.shipLength; i += 1) {
            gameBoard[index + i] = index;
          }
          newShip.shipNumber = index;
        } else if (position === 'vertical') {
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
