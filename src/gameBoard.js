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

  const placeShipHorizontal = (index, length, data) => {
    const newShip = shipFactory(length, data);
    for (let i = 0; i < newShip.hitPoints.length; i += 1) {
      gameBoard[index + i] = data;
    }
    shipList.push(newShip);
};
    const placeShipVertical = (index, length, data) => {
        const newShip = shipFactory(length, data);
        for (let i = 0; i < newShip.hitPoints.length * 10; i += 10) {
          gameBoard[index + i] = data;
        }
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
