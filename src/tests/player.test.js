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

  test('generateNextCoord with no attacks', () => {
    const gameboard = new Gameboard(5, 5);
    const player = new ComputerPlayer(gameboard);
    expect(player.generateNextCoord()).toEqual([0, 0]);
  });

  test('generateNextCoord with attacks', () => {
    const gameboard = new Gameboard(5, 5);
    const player = new ComputerPlayer(gameboard);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    expect(player.generateNextCoord()).toEqual([2, 0]);
  });

  test('generateNextCoord with full row', () => {
    const gameboard = new Gameboard(2, 2);
    const player = new ComputerPlayer(gameboard);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    expect(player.generateNextCoord()).toEqual([0, 1]);
  });
});
