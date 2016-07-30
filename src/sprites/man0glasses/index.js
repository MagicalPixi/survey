var mySpriteFn = require('./sprite.js');

module.exports = function (arg) {

  var sp = mySpriteFn(arg);

  sp.x = arg.x
  sp.y = arg.y

  sp.render = function(){

  }
  
  return sp
}