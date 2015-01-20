(function () {
  if (typeof Asteroids ==="undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function Util () {};

  Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate(){};
    Surrogate.prototype = ParentClass.prototype
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function () {
    var velVector = new Array(2);
    for (var i = 0; i < velVector.length; i++) {
      velVector[i] = Math.round(Math.random() * 3);
      var neg = Math.round(Math.random());
      if (neg === 0) { velVector[i] *= -1 };
    };
    return velVector;
  };
})();
