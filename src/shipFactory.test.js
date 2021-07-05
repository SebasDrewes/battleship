import myModule from './shipFactory';

const { shipFactory } = myModule;
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
