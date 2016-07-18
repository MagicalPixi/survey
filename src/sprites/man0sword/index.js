var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

module.exports = function () {

  var mySprite = mySpriteFn();
  mySprite.scale.x = 0.6
  mySprite.scale.y = 0.6

  mySprite.x = 150

  mySprite.initY = 150
  mySprite.y = mySprite.initY

  var i = 4;
  mySprite.render = function () {
    mySprite.y = mySprite.initY + pixiLib.math.boomerangTrace(i++,4)
  }

  return mySprite
}