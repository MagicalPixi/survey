var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

function trace(x) {
  x = x%10

  if(x >= 5){
    x = 10 -x;
  }

  return x
}

module.exports = function (leftAside) {
  var mySprite = mySpriteFn();

  mySprite.initX = leftAside ? 32 : 125
  mySprite.x = mySprite.initX
  
  mySprite.y = 40
  mySprite.scale.x = 0.7
  mySprite.scale.y = 0.7

  var i = 0

  mySprite.render = function () {
    
    mySprite.x = mySprite.initX + pixiLib.math.boomerangTrace(i,5,leftAside)
  }



  return mySprite
}