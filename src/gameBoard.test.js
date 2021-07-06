import myModule from './gameBoard';

const { GameBoard } = myModule;

test('test', () => {
  const newBoard = GameBoard();
  newBoard.placeShipHorizontal(0, 5);
  newBoard.placeShipVertical(5, 5);
  expect(newBoard.gameBoard[0]).toBe(0);
  expect(newBoard.gameBoard[1]).toBe(0);
  expect(newBoard.gameBoard[2]).toBe(0);
  expect(newBoard.gameBoard[3]).toBe(0);
  expect(newBoard.gameBoard[4]).toBe(0);

  expect(newBoard.gameBoard[5]).toBe(5);
  expect(newBoard.gameBoard[15]).toBe(5);
  expect(newBoard.gameBoard[25]).toBe(5);
  expect(newBoard.gameBoard[35]).toBe(5);
  expect(newBoard.gameBoard[45]).toBe(5);

  expect(newBoard.shipList[0].shipNumber).toBe(0);
  expect(newBoard.shipList[1].shipNumber).toBe(5);
  expect(newBoard.gameBoard[2]).toBe(0);
  newBoard.receiveAttack(0);
  newBoard.receiveAttack(1);
  newBoard.receiveAttack(2);
  newBoard.receiveAttack(3);
  newBoard.receiveAttack(4);
  expect(newBoard.shipList[0].hitPoints[0]).toBe('hit');
  expect(newBoard.gameBoard[0]).toBe('hit');
  expect(newBoard.shipList[0].hitPoints[1]).toBe('hit');
  expect(newBoard.shipList[0].hitPoints[3]).toBe('hit');
  expect(newBoard.shipList[0].hitPoints[4]).toBe('hit');
  expect(newBoard.shipList[0].isSunk()).toBe(true);
  newBoard.receiveAttack(33);
  expect(newBoard.gameBoard[33]).toBe('noHit');
  /*
  newBoard.receiveAttack(1);
  expect(newBoard.shipList[0].hitPoints[1].position).toBe('hit');
  // newBoard.receiveAttack(45);
  // expect(newBoard.shipList[1].hitPoints[1].position).toBe('hit'); */
});
