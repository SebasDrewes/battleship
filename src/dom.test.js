import myModule from './dom';

const { displayBoards } = myModule;

test('testing placing boards', () => {
  expect(displayBoards()).toBe(true);
});
