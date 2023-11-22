import Ship from '../modules/ship';

test('Constructing ship', () => {
  const ship1 = new Ship(5);
  expect(ship1.length).toBe(5);
});
