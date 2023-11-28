import createGame from '../modules/game';

test('Playing first round with no winner', () => {
  const game = createGame();
  expect(game.playRound(0, 0)).toBe(0);
});

test('Playing until computer wins', () => {
  const game = createGame();
  expect(game.playRound(0, 0)).toBe(0);
  expect(game.playRound(1, 0)).toBe(2);
});

test('Playing so human wins', () => {
  const game = createGame();
  expect(game.playRound(1, 1)).toBe(1);
});
