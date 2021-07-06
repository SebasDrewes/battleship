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

  const placeShipHorizontal = (index, length) => {
    const newShip = shipFactory(index, length);
    for (let i = 0; i < newShip.shipLength; i += 1) {
      gameBoard[index + i] = index;
    }
    newShip.shipNumber = index;
    shipList.push(newShip);
};
    const placeShipVertical = (index, length) => {
        const newShip = shipFactory(index, length);
        for (let i = 0; i < newShip.shipLength * 10; i += 10) {
          gameBoard[index + i] = index;
        }
        newShip.shipNumber = index;
        shipList.push(newShip);
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
  return {
    placeShipHorizontal, placeShipVertical, receiveAttack, gameBoard, shipList,
  };
};

export default {
  GameBoard,
};
