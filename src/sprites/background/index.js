var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {

   var sp = mySpriteFn(arg)

    sp.y = 350;

    sp.render = function(){

    }

   return sp;
};