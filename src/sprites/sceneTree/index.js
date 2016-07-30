var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {

  var sp = mySpriteFn(arg)

  sp.x = 200
  sp.y = -100
  sp.scale.x = 8
  sp.scale.y = 8

  sp.render = function () {

  }

  return sp;
};