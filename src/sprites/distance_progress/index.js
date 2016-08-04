/**
 * Created by zyg on 16/5/19.
 */
var pxiLib = require('pixi-lib');

var spriteFn = require('./sprite');

var flagFn = require('../race_flag');

var WIDTH  = pixiLib.createRender.DEFAULT_WIDTH;

/**
 *
 * @param arg
 *
 *   getData()
 *
 * @returns {*}
 */
function fillFunc(arg,names) {
  names.forEach(function (n) {
    if(!arg[n]){
      arg[n] = function () {}
    }
  })
  return arg;
}

module.exports = function (arg) {

  fillFunc(arg,['getData','onEnd'])

  // var flag = flagFn();
  var bar = spriteFn.base();
  var progress = spriteFn.progress();

  var container = new PIXI.Container();

  var isEnd = false;
  var over = isEnd;
  var direction = 1;

  // flag.y = 25;
  // flag.x = 5;

  var progressLength = 0;

  if(arg.reverse){
    progressLength = progress.maxWidth
    direction = -1
  }

  container.addChild(bar);

  container.addChild(progress);
  // container.addChild(flag)

  var unit = progress.maxWidth/arg.maxValue

  container.render = function () {
    if(!isEnd){

      var d = arg.getData()

      d = d * progressLength
      // progressLength =  progressLength  + direction * d;

      isEnd = progress.updateWidth(d,arg.reverse);

    }else if(!over){
      arg.onEnd()
      over = true;
    }
  }


  return container;
}