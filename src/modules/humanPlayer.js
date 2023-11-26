import Player from './player';

export default class HumanPlayer extends Player {
  constructor(enemyGameboard) {
    super(enemyGameboard);
  }

  takeTurn(x, y) {
    return this.enemyGameboard.receiveAttack(x, y);
  }
}
