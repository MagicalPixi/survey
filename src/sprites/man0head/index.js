var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {

  var sp = mySpriteFn(arg)

  sp.initX = 0
  sp.initY = 0

  sp.render = function () {

  }

  return sp;
};