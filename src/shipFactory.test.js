import myModule from './shipFactory';

const { shipFactory } = myModule;
test('testing push hitpoints', () => {
  const small = shipFactory(5, 2);
  expect(Object.keys(small.hitPoints).length).toBe(2);
  expect(small.shipLength).toBe(2);
  expect(small.hitPoints[5]).toBe('noHit');
  expect(small.hitPoints[6]).toBe('noHit');
});
test('testing hitted target', () => {
  const small = shipFactory(10, 5);
  small.hit(10);
  expect(small.hitPoints[10]).toBe('hit');
  expect(small.hitPoints[11]).toBe('noHit');
  expect(small.isSunk()).toBe(false);
});
test('testing isSunk', () => {
  const small = shipFactory(1, 2);
  expect(small.hitPoints[1]).toBe('noHit');
  small.hit(1);
  small.hit(2);
  expect(small.hitPoints[1]).toBe('hit');
  expect(small.hitPoints[2]).toBe('hit');
  expect(small.isSunk()).toBe(true);
});
