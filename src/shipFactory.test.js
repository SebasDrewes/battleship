import myModule from './shipFactory';

const { shipFactory } = myModule;
test('testing push hitpoints', () => {
  const small = shipFactory(5, 2, 'horizontal');
  expect(Object.keys(small.hitPoints).length).toBe(2);
  expect(small.shipLength).toBe(2);
  expect(small.hitPoints[5]).toBe('noHit');
  expect(small.hitPoints[6]).toBe('noHit');
});
test('placing vertical ship', () => {
  const medium = shipFactory(9, 2, 'vertical');
  expect(Object.keys(medium.hitPoints).length).toBe(2);
  expect(medium.shipLength).toBe(2);
  expect(medium.hitPoints[9]).toBe('noHit');
  expect(medium.hitPoints[19]).toBe('noHit');
});
test('testing hitted target', () => {
  const small = shipFactory(10, 5, 'horizontal');
  small.hit(10);
  expect(small.hitPoints[10]).toBe('hit');
  expect(small.hitPoints[11]).toBe('noHit');
  expect(small.isSunk()).toBe(false);
});
test('testing hitted target vertical', () => {
  const medium = shipFactory(10, 5, 'vertical');
  medium.hit(10);
  medium.hit(20);
  medium.hit(30);
  medium.hit(40);
  medium.hit(50);
  expect(medium.hitPoints[10]).toBe('hit');
  expect(medium.hitPoints[20]).toBe('hit');
  expect(medium.hitPoints[30]).toBe('hit');
  expect(medium.hitPoints[40]).toBe('hit');
  expect(medium.hitPoints[50]).toBe('hit');
  expect(medium.isSunk()).toBe(true);
});
test('testing isSunk', () => {
  const small = shipFactory(1, 2, 'horizontal');
  expect(small.hitPoints[1]).toBe('noHit');
  small.hit(1);
  small.hit(2);
  expect(small.hitPoints[1]).toBe('hit');
  expect(small.hitPoints[2]).toBe('hit');
  expect(small.isSunk()).toBe(true);
});
