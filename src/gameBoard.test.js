import myModule from './gameBoard';

const { GameBoard } = myModule;

test('test', () => {
  const newBoard = GameBoard();
  newBoard.placeShip(0, 5, 'horizontal');
  newBoard.placeShip(5, 5, 'vertical');
  expect(newBoard.gameBoard[0]).toBe(0);
  expect(newBoard.gameBoard[1]).toBe(0);
  expect(newBoard.gameBoard[2]).toBe(0);
  expect(newBoard.gameBoard[3]).toBe(0);
  expect(newBoard.gameBoard[4]).toBe(0);

  expect(newBoard.gameBoard[5]).toBe(5);
  expect(newBoard.gameBoard[16]).toBe(5);
  expect(newBoard.gameBoard[27]).toBe(5);
  expect(newBoard.gameBoard[38]).toBe(5);
  expect(newBoard.gameBoard[49]).toBe(5);

  expect(newBoard.shipList[0].shipNumber).toBe(0);
  expect(newBoard.shipList[1].shipNumber).toBe(5);
  expect(newBoard.gameBoard[2]).toBe(0);
  newBoard.receiveAttack(0);
  newBoard.receiveAttack(1);
  newBoard.receiveAttack(2);
  newBoard.receiveAttack(3);
  newBoard.receiveAttack(4);
  newBoard.receiveAttack(5);
  newBoard.receiveAttack(15);
  newBoard.receiveAttack(25);
  newBoard.receiveAttack(35);
  newBoard.receiveAttack(45);
  expect(newBoard.shipList[0].hitPoints[0]).toBe('hit');
  expect(newBoard.gameBoard[0]).toBe('hit');
  expect(newBoard.shipList[0].hitPoints[1]).toBe('hit');
  expect(newBoard.shipList[0].hitPoints[3]).toBe('hit');
  expect(newBoard.shipList[0].hitPoints[4]).toBe('hit');
  expect(newBoard.shipList[0].isSunk()).toBe(true);
  newBoard.receiveAttack(33);
  expect(newBoard.gameBoard[33]).toBe('noHit');
});
