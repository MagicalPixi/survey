var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {

  var sp = mySpriteFn(arg)

  sp.initX = arg.x
  sp.initY = arg.y

  var i=0,j=1;
  sp.render = function () {
    this.x = this.initX + pixiLib.math.boomerangTrace(i++,4)
    this.y = this.initY + pixiLib.math.boomerangTrace(j++,4)
  }

  return sp;
};