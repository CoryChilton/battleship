import Player from '../modules/player';
import HumanPlayer from '../modules/humanPlayer';
import Gameboard from '../modules/gameboard';
import ComputerPlayer from '../modules/computerPlayer';

describe('HumanPlayer', () => {
  test('takeTurn hit', () => {
    const gameboard = new Gameboard(5, 5);
    gameboard.placeShip(0, 0, 3, 0);
    const player = new HumanPlayer(gameboard);
    expect(player.takeTurn(0, 0)).toBe(true);
  });

  test('takeTurn miss', () => {
    const gameboard = new Gameboard(5, 5);
    gameboard.placeShip(0, 0, 3, 0);
    const player = new HumanPlayer(gameboard);
    expect(player.takeTurn(0, 1)).toBe(false);
  });
});

describe('ComputerPlayer', () => {
  const mockFunc = function () {
    return [0, 0];
  };
  test('takeTurn hit', () => {
    const gameboard = new Gameboard(5, 5);
    gameboard.placeShip(0, 0, 3, 0);
    const player = new ComputerPlayer(gameboard);
    expect(player.takeTurn(mockFunc)).toBe(true);
  });

  test('takeTurn miss', () => {
    const gameboard = new Gameboard(5, 5);
    gameboard.placeShip(0, 1, 3, 1);
    const player = new ComputerPlayer(gameboard);
    expect(player.takeTurn(mockFunc)).toBe(false);
  });
});
