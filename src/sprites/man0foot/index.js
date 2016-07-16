var mySpriteFn = require('./sprite.js');


function trace(x) {
  x = x%9

  if(x >= 5){
    x = 9 -x;
  }

  x = x%5

  return x
}

module.exports = function (leftAside) {
  var mySprite = mySpriteFn();

  mySprite.x = leftAside ? 55 : 120
  mySprite.initY = 305
  mySprite.y = mySprite.initY + (leftAside? 0 : 4)
  mySprite.scale.x = 0.4
  mySprite.scale.y = 0.4

  var i = leftAside ? 0 : 4;

  mySprite.render = function () {
      this.y = this.initY + trace(i++)
  }

  return mySprite
}