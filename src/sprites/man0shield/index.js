var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

module.exports = function (arg) {
  var sp = mySpriteFn(arg)

  sp.initX = arg.x
  sp.initY = arg.y

  var i = 0

  sp.render = function () {
    sp.y = sp.initY + pixiLib.math.boomerangTrace(i++,4)
  }

  return sp
}