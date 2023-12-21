import createGame from './game';

const DOMController = (function () {
  let game = createGame();
  const width = game.GAMEBOARD_WIDTH;
  const height = game.GAMEBOARD_HEIGHT;
  const p1Board = document.querySelector('#player-1 .board');
  const p2Board = document.querySelector('#player-2 .board');
  const newGameBtn = document.getElementById('new-game');
  newGameBtn.addEventListener('click', () => {
    game = createGame();
    render();
  });
  const clickBoard = function (e) {
    const winner = game.playRound(
      e.target.dataset.xIndex,
      e.target.dataset.yIndex,
    );
    if (winner === 1) {
      setTimeout(() => alert('You win!'), 0);
    } else if (winner === 2) {
      setTimeout(() => alert('You lose!'), 0);
    }
    render();
  };

  const render = function renderEntireScreen() {
    for (const [gameboard, boardDiv] of [
      [game.gameboard1, p1Board],
      [game.gameboard2, p2Board],
    ]) {
      boardDiv.textContent = '';
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const cell = document.createElement('div');
          if (boardDiv === p1Board) {
            cell.setAttribute('data-x-index', x);
            cell.setAttribute('data-y-index', y);
            cell.addEventListener('click', clickBoard);
          }

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
})();

export default DOMController;
