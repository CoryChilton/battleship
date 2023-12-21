import Gameboard from '../modules/gameboard';

test('Place ship normally', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 3, 0);
  expect(gameboard1.ships[0].xStart).toBe(0);
  expect(gameboard1.ships[0].yStart).toBe(0);
  expect(gameboard1.ships[0].xEnd).toBe(3);
  expect(gameboard1.ships[0].yEnd).toBe(0);
  expect(gameboard1.ships[0].length).toBe(4);
  gameboard1.placeShip(0, 1, 4, 1);
  expect(gameboard1.totalShipLength).toBe(9);
});

test('Place ship out of bounds', () => {
  const gameboard1 = new Gameboard(5, 5);
  expect(() => {
    gameboard1.placeShip(0, 0, 5, 0);
  }).toThrow();
});

test('receiveAttack hits', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 3, 0);
  gameboard1.receiveAttack(0, 0);
  expect(gameboard1.hits.has('0,0')).toBe(true);
});

test('receiveAttack misses', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 3, 0);
  gameboard1.receiveAttack(0, 1);
  expect(gameboard1.misses.has('0,1')).toBe(true);
});

test('receiveAttack out of bounts', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 3, 0);
  expect(() => {
    gameboard1.receiveAttack(0, 5);
  }).toThrow();
});

test('allSunk with too few hits', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 3, 0);
  gameboard1.receiveAttack(0, 0);
  expect(gameboard1.allSunk()).toBe(false);
});

test('allSunk with correct amount of hits', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 1, 0);
  gameboard1.receiveAttack(0, 0);
  gameboard1.receiveAttack(1, 0);
  expect(gameboard1.allSunk()).toBe(true);
});

test('allSunk with too few hits and misses', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 1, 0);
  gameboard1.receiveAttack(0, 0);
  gameboard1.receiveAttack(0, 1);
  expect(gameboard1.allSunk()).toBe(false);
});

test('allSunk with multiple hits to the same place', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 1, 0);
  gameboard1.receiveAttack(0, 0);
  gameboard1.receiveAttack(0, 0);
  expect(gameboard1.allSunk()).toBe(false);
});

test('allSunk with multiple ships', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 1, 0);
  gameboard1.placeShip(1, 1, 1, 1);
  gameboard1.receiveAttack(0, 0);
  gameboard1.receiveAttack(1, 0);
  gameboard1.receiveAttack(1, 1);
  expect(gameboard1.allSunk()).toBe(true);
});

test('placeShip and check shipsCoords', () => {
  const gameboard1 = new Gameboard(5, 5);
  gameboard1.placeShip(0, 0, 1, 0);
  gameboard1.placeShip(1, 1, 1, 1);
  expect(gameboard1.shipsCoords.has('0,1')).toBe(false);
  expect(gameboard1.shipsCoords.has('0,0')).toBe(true);
  expect(gameboard1.shipsCoords.has('1,0')).toBe(true);
  expect(gameboard1.shipsCoords.has('1,1')).toBe(true);
});
