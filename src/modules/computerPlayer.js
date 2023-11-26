import Player from './player';

export default class ComputerPlayer extends Player {
  constructor(enemyGameboard) {
    super(enemyGameboard);
  }

  takeTurn(randCoordFunc) {
    const [x, y] = randCoordFunc();
    return this.enemyGameboard.receiveAttack(x, y);
  }
}
