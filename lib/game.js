(function () {
    if (typeof Asteroids ==="undefined") {
        window.Asteroids = {};
    }

    var Game = Asteroids.Game = function Game(){
        this.DIM_X = 640;
        this.DIM_Y = 480;
        this.NUM_ASTEROIDS = 10;
        this.asteroids = [];
        this.addAsteroids();
        this.ship = new Asteroids.Ship({game: this});
    };

    Game.prototype.addAsteroids = function (){
        while (this.asteroids.length < this.NUM_ASTEROIDS) {
            var asteroid = new Asteroids.Asteroid ({
                pos: this.randomPosition(),
                game: this
            });
            this.asteroids.push(asteroid);
        };
    };

    Game.prototype.randomPosition = function () {
        var pos = new Array(2);
        pos[0] = Math.round(Math.random() * this.DIM_X);
        pos[1] = Math.round(Math.random() * this.DIM_Y);
        return pos;
    };

    Game.prototype.draw = function (ctx) {
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        var allObjects = this.allObjects();

        for (var i = 0; i < allObjects.length; i++) {
            allObjects[i].draw(ctx);
        };
    };

    Game.prototype.moveObjects = function(){
        var allObjects = this.allObjects();

        for (var i = 0; i < allObjects.length; i++) {
            allObjects[i].move();
        };
    };

    Game.prototype.wrap = function (pos) {
        if (pos[0] >= this.DIM_X) {
            pos[0] -= this.DIM_X;
        } else if (pos[0] <= 0) {
            pos[0] += this.DIM_X;
        };

        if (pos[1] >= this.DIM_Y) {
            pos[1] -= this.DIM_Y;
        } else if (pos[1] <= 0) {
            pos[1] += this.DIM_Y;
        };
    };

    Game.prototype.checkCollisions = function(){
        var allObjects = this.allObjects();
        for (var i = 0; i < allObjects.length; i++){
            for (var j = 0; j < allObjects.length; j++){
                if (i === j) { continue };
                var obj = allObjects[i];
                var otherObj = allObjects[j];
                if (obj.isCollidedWith(otherObj)) {
                    obj.collideWith(otherObj);
                };
            };
        };
    };

    Game.prototype.remove = function (object) {
        var objectIdx = this.asteroids.indexOf(object)
        this.asteroids.splice(objectIdx, 1);
    };

    Game.prototype.step = function(){
        this.moveObjects();
        this.checkCollisions();
    };

    Game.prototype.allObjects = function(){
        return this.asteroids.concat([this.ship]);
    };
})();
