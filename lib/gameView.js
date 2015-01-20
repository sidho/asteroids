(function () {
  if (typeof Asteroids ==="undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function GameView(){
    this.game = new Asteroids.Game();
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  };

  GameView.prototype.start = function () {
    var that = this;
    var fps = Math.floor(1000/60);
    setInterval(function() {
      that.game.draw(that.ctx);
      that.game.step();
      console.log("I'm running!");
    }, fps);
  };
})();
