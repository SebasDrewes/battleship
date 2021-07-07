import myModule from './player';

const { player } = myModule;
test('testing turn taking hitting target', () => {
  player().takeTurn(0);
  expect(player().enemyGameBoard.gameBoard[0]).toBe('hit');
  expect(player().playerGameBoard.gameBoard[4]).toBe('hit');
});
