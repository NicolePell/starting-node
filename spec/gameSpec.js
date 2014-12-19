var Game = require('../src/game');

describe('Bowling', function() {

  var game = new Game();

  it('Can score 0', function() {
      game.roll(0)
      expect(game.score).toEqual(0);
  });

  it('Can score 4 on a roll', function() {
      game.roll(4)
      expect(game.score).toEqual(4);
  });

  it('Has a frame of 2 rolls', function() {
    
  });

});
