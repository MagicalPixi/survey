/**
 * Created by zyg on 16/7/31.
 */
var skeletonFn = require('../skeleton')

module.exports = function () {

  var stage = new PIXI.Container()

  return {
    el:function () {
      return stage
    },
    add:function () {

      stage.addChild(skeletonFn())
    }
  }
}