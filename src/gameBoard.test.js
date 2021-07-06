/* import myModule from './gameBoard';

const { GameBoard } = myModule;

test('test', () => {
  const newBoard = GameBoard();
  newBoard.placeShipHorizontal(0, 5, 1);
  newBoard.placeShipVertical(5, 6, 2);

  expect(newBoard.gameBoard[0]).toBe(1);
  expect(newBoard.gameBoard[1]).toBe(1);
  expect(newBoard.gameBoard[2]).toBe(1);
  expect(newBoard.gameBoard[3]).toBe(1);
  expect(newBoard.gameBoard[4]).toBe(1);
  expect(newBoard.gameBoard[5]).toBe(2);
  expect(newBoard.gameBoard[15]).toBe(2);
  expect(newBoard.gameBoard[25]).toBe(2);
  expect(newBoard.gameBoard[35]).toBe(2);
  expect(newBoard.gameBoard[45]).toBe(2);
  expect(newBoard.gameBoard[55]).toBe(2);
  expect(newBoard.shipList[0].shipNumber).toBe(1);
  expect(newBoard.shipList[1].shipNumber).toBe(2);
  newBoard.receiveAttack(0);
  expect(newBoard.shipList[0].hitPoints[0].position).toBe('hit');
  newBoard.receiveAttack(1);
  expect(newBoard.shipList[0].hitPoints[1].position).toBe('hit');
  // newBoard.receiveAttack(45);
  // expect(newBoard.shipList[1].hitPoints[1].position).toBe('hit');
});
*/
