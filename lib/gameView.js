(function () {
    if (typeof Asteroids ==="undefined") {
        window.Asteroids = {};
    }

    var GameView = Asteroids.GameView = function GameView () {
        this.game = new Asteroids.Game();
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
    };

    GameView.prototype.bindKeyHandlers = function () {
        var ship = this.game.ship;
        key("up", function () { ship.power([0, -1]); });
        key("left", function () { ship.power([-1, 0]); });
        key("down", function () { ship.power([0,  1]); });
        key("right", function () { ship.power([1, 0]); });
    };

    GameView.prototype.start = function () {
        var view = this;
        var fps = Math.floor(1000/60);
        setInterval ( function() {
            view.game.draw(view.ctx);
            view.game.step();
            console.log("I'm running!");
        }, fps);
        this.bindKeyHandlers();
    };
})();
