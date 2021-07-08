import myModule from './player';

const { player } = myModule;

test('testing turn taking hitting target', () => {
  expect(player().turn).toBe('player');
  player().takeTurn(11);
  expect(player().turn).toBe('computer');
  player().takeTurn(11);
  expect(player().turn).toBe('player');
  player().takeTurn(11);
  expect(player().turn).toBe('player');
  player().takeTurn(11);
  expect(player().turn).toBe('player');
  player().takeTurn(11);
  expect(player().turn).toBe('player');
  player().takeTurn(11);
  expect(player().turn).toBe('player');
  player().takeTurn(0);
  expect(player().turn).toBe('player');
  player().takeTurn(33);
  expect(player().turn).toBe('computer');
  player().takeTurn(11);
  expect(player().turn).toBe('computer');
  expect(player().enemyGameBoard.gameBoard[11]).toBe('noHit');
  expect(player().playerGameBoard.gameBoard[11]).toBe('noHit');
  expect(player().enemyGameBoard.gameBoard[0]).toBe('hit');
  expect(player().enemyGameBoard.gameBoard[33]).toBe('noHit');
  expect(player().playerGameBoard.gameBoard[11]).toBe('noHit');
});
