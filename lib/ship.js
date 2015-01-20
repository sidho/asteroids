(function () {
    if (typeof Asteroids ==="undefined") {
        window.Asteroids = {};
    }

    var SHIP_COLOR = '#00FF00';
    var SHIP_RADIUS = 13;

    var Ship = Asteroids.Ship = function (properties) {
        Asteroids.MovingObject.call(this, properties);
        this.color = SHIP_COLOR;
        this.radius = SHIP_RADIUS;
        this.vel = [0,0];
        this.relocate();
    };

    Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

    Ship.prototype.relocate = function () {
        this.pos = this.game.randomPosition();
        this.vel = [0,0];
    };

    Ship.prototype.power = function (impulse) {
        this.vel[0] += impulse[0]
        this.vel[1] += impulse[1]
    };
})();
