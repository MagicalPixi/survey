var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

module.exports = function (arg) {

  var mySprite = mySpriteFn(arg);

  mySprite.initX = arg.x;
  mySprite.initY = arg.y;
  mySprite.rotation = mySprite.initRotation = -0.8;
  mySprite.anchor.x = 1;
  mySprite.anchor.y = 1;

  var i = 4;
  mySprite.render = function () {
    mySprite.rotation = mySprite.initRotation + pixiLib.math.boomerangTrace(i++,4)/10
  }

  return mySprite
}