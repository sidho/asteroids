(function () {
    if (typeof Asteroids ==="undefined") {
        window.Asteroids = {};
    }

    var ASTEROID_COLOR = '#696969';
    var ASTEROID_RADIUS = 20;

    var Asteroid = Asteroids.Asteroid = function (properties) {
        Asteroids.MovingObject.call(this, properties);
        this.color = ASTEROID_COLOR;
        this.radius = ASTEROID_RADIUS;
        this.vel = Asteroids.Util.randomVec();
    };

    Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();
