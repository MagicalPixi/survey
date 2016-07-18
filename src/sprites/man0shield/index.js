var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

module.exports = function () {
  var sp = mySpriteFn()

  sp.x = 10
  sp.initY = 220
  sp.y = sp.initY

  sp.scale.x = 0.3
  sp.scale.y = 0.3

  var i = 0

  sp.render = function () {
    sp.y = sp.initY + pixiLib.math.boomerangTrace(i++,4)
  }

  return sp
}