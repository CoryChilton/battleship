import Player from './player';

export default class ComputerPlayer extends Player {
  constructor(enemyGameboard) {
    super(enemyGameboard);
  }

  takeTurn(randCoordFunc) {
    const [x, y] = randCoordFunc();
    return this.enemyGameboard.receiveAttack(x, y);
  }

  generateNextCoord() {
    for (let y = 0; y < this.enemyGameboard.height; y++) {
      for (let x = 0; x < this.enemyGameboard.width; x++) {
        if (
          !this.enemyGameboard.hits.has(`${x},${y}`) &&
          !this.enemyGameboard.misses.has(`${x},${y}`)
        ) {
          return [x, y];
        }
      }
    }
  }
}
