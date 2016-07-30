var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {
  var mySprite = mySpriteFn(arg);

  mySprite.initX = arg.x
  mySprite.initY = arg.y;

  var i = arg.side ? 1 : 5;
  mySprite.render = function () {
    this.y = this.initY + pixiLib.math.boomerangTrace(i++,5)
  }

  return mySprite
}