var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {

  var sp = mySpriteFn(arg)

  sp.initX = 60
  sp.initY = 200

  sp.x = sp.initX
  sp.y = sp.initY

  sp.scale.x = 0.5
  sp.scale.y = 0.5

  var i=0,j=1;
  sp.render = function () {
    this.x = this.initX + pixiLib.math.boomerangTrace(i++,4)
    this.y = this.initY + pixiLib.math.boomerangTrace(j++,4)
  }

  return sp;
};