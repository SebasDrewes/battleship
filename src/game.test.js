import myModule from './game';

const { createNewGame } = myModule;

test('new game, create boards and placing boats', () => {
  const newGame = createNewGame();
  expect(newGame.enemyGameBoard.gameBoard[0]).toBe('hit');
  expect(newGame.enemyGameBoard.gameBoard[1]).toBe('hit');
  expect(newGame.enemyGameBoard.gameBoard[14]).toBe('noHit');
  expect(newGame.playerGameBoard.gameBoard[15]).toBe('noHit');
  expect(newGame.enemyGameBoard.gameBoard[26]).toBe('noHit');
});
