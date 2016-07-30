var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

function trace(x) {
  x = x%10

  if(x >= 5){
    x = 10 -x;
  }

  return x
}

module.exports = function (arg) {
  var mySprite = mySpriteFn(arg);

  mySprite.initX = arg.x
  mySprite.initY = arg.y

  mySprite.render = function () {
    
  }



  return mySprite
}