var mySpriteFn = require('./sprite.js');
var pixiLib = require('pixi-lib')


module.exports = function (arg) {

   var sp = mySpriteFn(arg)

    sp.y = 351;

    sp.render = function(){

    };

   return sp;
};