import myModule from './gameBoard';

const { GameBoard } = myModule;

test('test', () => {
  expect(GameBoard().length).toBe(100);
});
