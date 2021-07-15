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
  expect(medium.hitPoints[20]).toBe('noHit');
});
test('testing hitted target', () => {
  const small = shipFactory(10, 5, 'horizontal');
  small.hit(10);
  expect(small.hitPoints[10]).toBe('hit');
  expect(small.hitPoints[11]).toBe('noHit');
  expect(small.isSunk()).toBe(false);
});
test('testing hitted target vertical', () => {
  const medium = shipFactory(11, 5, 'vertical');
  medium.hit(11);
  medium.hit(22);
  medium.hit(33);
  medium.hit(44);
  medium.hit(55);
  expect(medium.hitPoints[11]).toBe('hit');
  expect(medium.hitPoints[22]).toBe('hit');
  expect(medium.hitPoints[33]).toBe('hit');
  expect(medium.hitPoints[44]).toBe('hit');
  expect(medium.hitPoints[55]).toBe('hit');
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
