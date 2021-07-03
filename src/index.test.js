import myModule from './index';

const { capitalize } = myModule;
const { reverseString } = myModule;
const { shipFactory } = myModule;
test('Pass one', () => {
  expect(capitalize('sebastian')).toBe('Sebastian');
});
test('Pass two', () => {
  expect(reverseString('sebastian')).toBe('naitsabes');
});
test('testing push hitpoints', () => {
  const small = shipFactory(2);
  expect(small.hitPoints.length).toBe(2);
});
test('testing hitted target', () => {
  const small = shipFactory(2);
  small.hit(1);
  expect(small.hitPoints[1].position).toBe('hit');
  expect(small.hitPoints[0].position).toBe('noHit');
});
test('testing isSunk', () => {
  const small = shipFactory(2);
  small.hit(1);
  small.hit(0);
  expect(small.hitPoints[1].position).toBe('hit');
  expect(small.hitPoints[0].position).toBe('hit');
  expect(small.isSunk()).toBe(true);
});
