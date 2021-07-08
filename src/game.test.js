import myModule from './game';

const { createNewGame } = myModule;

test('new game, create boards and placing boats', () => {
  expect(createNewGame().enemyGameBoard.gameBoard[0]).toBe('hit');
});
