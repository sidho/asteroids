(function () {
    if (typeof Asteroids ==="undefined") {
        window.Asteroids = {};
    }

    var MovingObject = Asteroids.MovingObject = function (properties) {
        this.game = properties.game;
        this.pos = properties.pos;
        this.vel = properties.vel;
        this.radius = properties.radius;
        this.color = properties.color;
    };

    MovingObject.prototype.draw = function(ctx){
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false
        );
        ctx.fillStyle = this.color
        ctx.fill();
        ctx.closePath();
    };

    MovingObject.prototype.move = function(){
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.game.wrap(this.pos);
    };

    MovingObject.prototype.isCollidedWith = function(otherObject){
        var xDist = Math.pow((this.pos[0] - otherObject.pos[0]), 2);
        var yDist = Math.pow((this.pos[1] - otherObject.pos[1]), 2);

        if ((Math.sqrt(xDist + yDist) < this.radius + otherObject.radius)) {
            return true;
        } else {
            return false;
        };
    };

    MovingObject.prototype.collideWith = function(otherObject){
      // if (otherObject instanceOf Ship){
      //   otherObject.relocate();
      // };
    };

})();
