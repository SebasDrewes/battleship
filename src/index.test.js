import myModule from './index';

const { capitalize } = myModule;
const { reverseString } = myModule;

test('Pass one', () => {
  expect(capitalize('sebastian')).toBe('Sebastian');
});
test('Pass two', () => {
  expect(reverseString('sebastian')).toBe('naitsabes');
});
