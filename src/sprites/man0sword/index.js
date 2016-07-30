var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

module.exports = function (arg) {

  var mySprite = mySpriteFn(arg);

  mySprite.initX = arg.x
  mySprite.initY = arg.y

  var i = 4;
  mySprite.render = function () {
    mySprite.y = mySprite.initY + pixiLib.math.boomerangTrace(i++,4)
  }

  return mySprite
}