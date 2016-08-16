var spFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {

   var sp = spFn(arg)

  sp.rotation = sp.initRotation = -0.2;

  var i = 4;
  sp.render = function () {
    sp.rotation = sp.initRotation + pixiLib.math.boomerangTrace(i++,4)/10
  }

   return sp;
};