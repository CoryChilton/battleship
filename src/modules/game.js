import HumanPlayer from './humanPlayer';
import ComputerPlayer, { randCoordFunc } from './computerPlayer';
import Gameboard from './gameboard';

export default function createGame() {
  const GAMEBOARD_WIDTH = 2;
  const GAMEBOARD_HEIGHT = 2;
  const gameboard1 = new Gameboard(GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
  gameboard1.placeShip(1, 0, 1, 0);
  const gameboard2 = new Gameboard(GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
  gameboard2.placeShip(1, 1, 1, 1);
  const player1 = new HumanPlayer(gameboard2);
  const player2 = new ComputerPlayer(gameboard1);

  const playRound = function (x, y) {
    player1.takeTurn(x, y);
    if (player1.enemyGameboard.allSunk()) {
      return 1;
    }
    player2.takeTurn(player2.generateNextCoord.bind(player2));
    if (player2.enemyGameboard.allSunk()) {
      return 2;
    }
    return 0;
  };

  return { playRound, GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH };
}
