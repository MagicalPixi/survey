var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')

module.exports = function (arg) {

  arg = Object.assign({},arg, {
    'anchor.x':0.5,
    'x': 320,
    y:100,
  })

  var sp = mySpriteFn(arg)

  sp.render = function () {
  }

  sp.die = function () {
    this.loop=false;
    this.playAction1(false,true)
  }

  return sp;
}