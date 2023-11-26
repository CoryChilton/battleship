import Ship from './ship';

export default class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ships = [];
    this.hits = new Set();
    this.misses = new Set();
    this.totalShipLength = 0;
  }

  placeShip(xStart, yStart, xEnd, yEnd) {
    if (
      xStart < 0 ||
      yStart < 0 ||
      xEnd > this.width - 1 ||
      yEnd > this.height - 1
    ) {
      throw new RangeError('Coordinates out of bounds.');
    }
    this.ships.push(new Ship(xStart, yStart, xEnd, yEnd));
    this.totalShipLength += this.ships[this.ships.length - 1].length;
  }

  receiveAttack(x, y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      throw new RangeError('Coordinates out of bounds.');
    }
    for (const ship of this.ships) {
      if (ship.isOnShip(x, y)) {
        ship.hit();
        this.hits.add(`${x},${y}`);
        return true;
      }
    }
    this.misses.add(`${x},${y}`);
    return false;
  }

  allSunk() {
    return this.hits.size === this.totalShipLength;
  }
}
