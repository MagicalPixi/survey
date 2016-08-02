/**
 * Created by zyg on 16/7/31.
 */
var skeletonFn = require('../skeleton')
var distanceProgressFn = require('../distance_progress')

function addMonster(stage,fn) {

  var currentMonster = fn()




  return currentMonster
}

module.exports = function () {

  var stage = new PIXI.Container()

  stage.render = function () {
    this.children.forEach(function (child) {
      child.render & child.render()
    })
  }

  var currentMonster = null;

  var obj = {
    el:function () {
      return stage
    },
    add:function () {

      var currentMonster = skeletonFn()

      var distanceProgress = distanceProgressFn({
        reverse:true,
        getData:function () {
          return 2
        },
        onEnd:function () {
          currentMonster.die()

          setTimeout(function () {
            obj.remove()
            obj.add()
          },1000)
        }
      })

      window.cm = currentMonster

      stage.addChild(distanceProgress)
      stage.addChild(currentMonster)

    },

    remove:function () {
      stage.removeChildren()
    }
  }

  return obj;
}