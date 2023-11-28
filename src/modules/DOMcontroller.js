import createGame from './game';

const DOMController = (function () {
  const game = createGame();
  const width = game.GAMEBOARD_WIDTH;
  const height = game.GAMEBOARD_HEIGHT;
  const p1Board = document.querySelector('#player-1 .board');
  const p2Board = document.querySelector('#player-2 .board');
  const render = function renderEntireScreen() {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const cell = document.createElement('div');
        p1Board.appendChild(cell);
      }
    }
  };

  render();

  return { render };
})();

export default DOMController;
