(function () {
    if (typeof Asteroids ==="undefined") {
        window.Asteroids = {};
    }


    var Asteroid = Asteroids.Asteroid = function (properties) {
        properties.color = Asteroid.COLOR;
        properties.radius = Asteroid.RADIUS;
        properties.vel = Asteroids.Util.randomVec();
        properties.pos = properties.pos || properties.game.randomPosition();
        Asteroids.MovingObject.call(this, properties);
    };

    Asteroid.COLOR = '#696969';
    Asteroid.RADIUS = 20;

    Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

    Asteroid.prototype.collideWith = function (otherObject) {
        if (otherObject instanceof Asteroids.Ship) {
          otherObject.relocate();
        }
    };

})();
