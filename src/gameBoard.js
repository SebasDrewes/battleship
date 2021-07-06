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
        for (let i = 0; i < shipList.length; i += 1) {
            if (shipList[i].shipNumber === gameBoard[index]) {
                shipList[i].hit(index);
            }
        }
    };
  return {
    placeShipHorizontal, placeShipVertical, receiveAttack, gameBoard, shipList,
  };
};

export default {
  GameBoard,
};
