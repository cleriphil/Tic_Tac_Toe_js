describe('Player', function() {
  it("initializes a player", function() {
    var player1 = new Player("Clare", "x");
    expect(player1.userName).to.equal("Clare");
    expect(player1.mark).to.equal("x");
    expect(player1.game).to.equal('no game')
  });

  it("marks a space", function() {
    var clare1 = new Player("Clare", "x");
    var cory2 = new Player("Cory", "o");
    var newGame = new Game(clare1, cory2);
    clare1.placeMark(1,2);
    expect(newGame.board.spaces[1][2].contains).to.equal('x');
  });
});

describe('Space', function() {
  it("initializes a space", function() {
    var bottomLeft = new Space([0, 0], ' ');
    expect(bottomLeft.coordinates).to.eql([0,0]);
    expect(bottomLeft.contains).to.equal(' ');
  });
});

describe('Board', function() {
  it("initalizes a board", function() {
    var newBoard = new Board();
    var topLeft = new Space([0,2], ' ');
    expect(newBoard.spaces[0][2]).to.eql(topLeft);
  });
});

describe('Game', function() {
  it("initializes a game", function() {
    var clare = new Player("Clare", "x");
    var cory = new Player("Cory", "o");
    var newGame = new Game(clare, cory);
    expect(newGame.player1).to.equal(clare);
    expect(newGame.player2).to.equal(cory);
    var myBoard = new Board()
    expect(newGame.board).to.eql(myBoard);
    expect(clare.game).to.equal(newGame);
    expect(newGame.winner).to.equal('none');
  });
});

describe('winningCombo', function() {
  it('initializes a winning combo', function() {
    var WinningComboA = new WinningCombo(new Space([0,0], ' '),
                                          new Space([0,1], ' '),
                                          new Space([0,2], ' ')
    );
    expect(WinningComboA.spaces).to.eql([new Space([0,0], ' '),
                                          new Space([0,1], ' '),
                                          new Space([0,2], ' ')])
  });
});

  // it("determines a winner", function() {
  //   var clare = new Player("Clare", "x");
  //   var cory = new Player("Cory", "o");
  //   var newGame = new Game(clare, cory);
  //   cory.placeMark(1,1);
  //   clare.placeMark(2,2);
  //   cory.placeMark(0,2);
  //   clare.placeMark(1,2);
  //   cory.placeMark(2,0);
  //   expect(newGame.winner()).to.equal(cory);
  // });

  // it("determines if a game is over because a player won", function() {
  //   var clare = new Player("Clare", "x");
  //   var cory = new Player("Cory", "o");
  //   var newGame = new Game(clare, cory);
  //   cory.placeMark(0,0);
  //   clare.placeMark(1,1);
  //   cory.placeMark(0,1);
  //   // expect(newGame.gameOverCheck()).to.equal(false);
  //   clare.placeMark(1,2);
  //   cory.placeMark(0,2);
  //   // expect(newGame.gameOverCheck()).to.equal(true);
  //   newGame.gameOverCheck()
  //   expect(newGame.winner).to.equal('x');
  // });
