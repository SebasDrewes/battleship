import myModule from './gameBoard';

const { GameBoard } = myModule;

test('test', () => {
  const newBoard = GameBoard();
  newBoard.placeShipHorizontal(0, 5);
  newBoard.placeShipVertical(5, 6);

  expect(newBoard.gameBoard[0]).toBe('ship');
  expect(newBoard.gameBoard[1]).toBe('ship');
  expect(newBoard.gameBoard[2]).toBe('ship');
  expect(newBoard.gameBoard[3]).toBe('ship');
  expect(newBoard.gameBoard[4]).toBe('ship');
  expect(newBoard.gameBoard[5]).toBe('ship');
  expect(newBoard.gameBoard[15]).toBe('ship');
  expect(newBoard.gameBoard[25]).toBe('ship');
  expect(newBoard.gameBoard[35]).toBe('ship');
  expect(newBoard.gameBoard[45]).toBe('ship');
  expect(newBoard.gameBoard[55]).toBe('ship');
});
