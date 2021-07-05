/* eslint-disable indent */
import myModule from './shipFactory';

const { shipFactory } = myModule;

const GameBoard = () => {
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
    const newShip = shipFactory(length);
    for (let i = 0; i < newShip.hitPoints.length; i += 1) {
      gameBoard[index + i] = 'ship';
    }
};
    const placeShipVertical = (index, length) => {
        const newShip = shipFactory(length);
        for (let i = 0; i < newShip.hitPoints.length * 10; i += 10) {
          gameBoard[index + i] = 'ship';
        }
    };

  return {
    placeShipHorizontal, placeShipVertical, gameBoard,
  };
};

export default {
  GameBoard,
};
