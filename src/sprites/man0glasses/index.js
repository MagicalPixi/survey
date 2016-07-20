var mySpriteFn = require('./sprite.js');

module.exports = function () {

  var sp = mySpriteFn();

  sp.x = -18
  sp.y = 20

  sp.scale.x = 0.6
  sp.scale.y = 0.6

  sp.render = function(){

  }

  return sp
}