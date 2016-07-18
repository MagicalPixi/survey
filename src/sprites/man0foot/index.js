var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (leftAside) {
  var mySprite = mySpriteFn();

  mySprite.x = leftAside ? 55 : 120
  mySprite.initY = 304
  mySprite.y = mySprite.initY + (leftAside? 0 : 4)
  mySprite.scale.x = 0.4
  mySprite.scale.y = 0.4

  var i = leftAside ? 0 : 4;

  mySprite.render = function () {
      this.y = this.initY + pixiLib.math.boomerangTrace(i++,4)
  }

  return mySprite
}