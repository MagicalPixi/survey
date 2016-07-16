var mySpriteFn = require('./sprite.js');

function trace(x) {
  x = x%10

  if(x >= 5){
    x = 10 -x;
  }

  return x
}

module.exports = function (leftAside) {
  var mySprite = mySpriteFn();

  mySprite.initX = leftAside ? 30 : 125
  mySprite.x = mySprite.initX
  
  mySprite.y = 40
  mySprite.scale.x = 0.7
  mySprite.scale.y = 0.7

  var i = 0

  mySprite.render = function () {
    this.x = this.initX + trace(i++)
  }



  return mySprite
}