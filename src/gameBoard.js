/* eslint-disable indent */
import myModule from './shipFactory';

const { shipFactory } = myModule;

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
  const placeShip = (index, length, position) => {
    const newShip = shipFactory(index, length, position);
    if (position === 'horizontal') {
    for (let i = 0; i < newShip.shipLength; i += 1) {
      gameBoard[index + i] = index;
    }
    newShip.shipNumber = index;
    shipList.push(newShip);
  } else if (position === 'vertical') {
    for (let i = 0; i < newShip.shipLength * 10; i += 10) {
      gameBoard[index + i] = index;
    }
    newShip.shipNumber = index;
    shipList.push(newShip);
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
