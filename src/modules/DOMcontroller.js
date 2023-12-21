import createGame from './game';

const DOMController = (function () {
  const game = createGame();
  const width = game.GAMEBOARD_WIDTH;
  const height = game.GAMEBOARD_HEIGHT;
  const p1Board = document.querySelector('#player-1 .board');
  const p2Board = document.querySelector('#player-2 .board');
  const render = function renderEntireScreen() {
    for (const [gameboard, boardDiv] of [
      [game.gameboard1, p1Board],
      [game.gameboard2, p2Board],
    ]) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const cell = document.createElement('div');
          if (gameboard.shipsCoords.has(`${x},${y}`)) {
            cell.classList.add('ship-cell');
          }
          if (gameboard.hits.has(`${x},${y}`)) {
            cell.classList.add('hit-cell');
          } else if (gameboard.misses.has(`${x},${y}`)) {
            cell.classList.add('miss-cell');
          }
          boardDiv.appendChild(cell);
        }
      }
    }
  };

  render();

  return { render };
})();

export default DOMController;
