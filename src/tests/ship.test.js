import Ship from '../modules/ship';

test('Ship instantiation horizontal', () => {
  const ship1 = new Ship(0, 0, 5, 0);
  expect(ship1.length).toBe(5);
  expect(ship1.hits).toBe(0);
});

test('Ship instantiation vertical', () => {
  const ship1 = new Ship(0, 0, 0, 5);
  expect(ship1.length).toBe(5);
  expect(ship1.hits).toBe(0);
});

test('Ship instantiation backwards', () => {
  const ship1 = new Ship(5, 0, 0, 0);
  expect(ship1.length).toBe(5);
  expect(ship1.hits).toBe(0);
});

test('Diagonal ship', () => {
  expect(() => {
    new Ship(1, 1, 2, 2);
  }).toThrow();
});

test('Ship hit once', () => {
  const ship2 = new Ship(0, 0, 5, 0);
  ship2.hit();
  expect(ship2.hits).toBe(1);
});

test('Ship hit multiple times', () => {
  const ship3 = new Ship(3);
  ship3.hit();
  ship3.hit();
  ship3.hit();
  expect(ship3.hits).toBe(3);
});

test('isSunk with no hits', () => {
  const ship4 = new Ship(0, 0, 5, 0);
  expect(ship4.isSunk()).toBe(false);
});

test('isSunk with too few hits', () => {
  const ship5 = new Ship(0, 0, 5, 0);
  ship5.hit();
  expect(ship5.isSunk()).toBe(false);
});

test('isSunk with exact number of hits', () => {
  const ship5 = new Ship(0, 0, 2, 0);
  ship5.hit();
  ship5.hit();
  expect(ship5.isSunk()).toBe(true);
});

test('isSunk with more hits than necessary', () => {
  const ship5 = new Ship(0, 0, 2, 0);
  ship5.hit();
  ship5.hit();
  ship5.hit();
  expect(ship5.isSunk()).toBe(true);
});
