export default class Player {
  constructor(enemyGameboard) {
    this.enemyGameboard = enemyGameboard;
  }

  takeTurn(...args) {
    throw new Error('You have to implement the method takeTurn');
  }
}
