export default class Ship {
  constructor(xStart, yStart, xEnd, yEnd) {
    if (xStart !== xEnd && yStart !== yEnd) {
      throw new RangeError('Invalid coordinates');
    }
    this.length = (Math.abs(xStart - xEnd) || Math.abs(yStart - yEnd)) + 1;
    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }

  isOnShip(x, y) {
    return (
      x >= this.xStart && x <= this.xEnd && y >= this.yStart && y <= this.yEnd
    );
  }
}
