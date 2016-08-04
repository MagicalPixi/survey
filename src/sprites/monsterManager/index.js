/**
 * Created by zyg on 16/7/31.
 */
var skeletonFn = require('../skeleton')
var distanceProgressFn = require('../distance_progress')

function addMonster(stage, fn) {

  var currentMonster = fn()


  return currentMonster
}


function hpBar(maxHp) {

  var curHp = maxHp;

  function hpDisplayText(a,b) {
    return     a + '/' + b + ' ';
  }

  var hpText = new PIXI.Text(
    hpDisplayText(maxHp,curHp),
    {
      font: 'bold italic 40px Arvo',
      fill: '#333333',
      align: 'center',
      // stroke: '#a4410e',
      // strokeThickness: 7
    });

  hpText.width = 300
  hpText.x = 320;
  hpText.anchor.x = 0.5
  hpText.y = 80;

  return {
    el:function () {
      return hpText
    },
    hpDel:function (num) {
      curHp -= num;
      if(curHp<0){
        curHp = 0;
      }

      hpText.text = hpDisplayText(maxHp,curHp)
    },
    curHpP:function () {
      return curHp / maxHp
    }
  }
}

module.exports = function () {

  var stage = new PIXI.Container()

  stage.render = function () {
    this.children.forEach(function (child) {
      child.render && child.render()
    })
  }

  var currentMonster = null;

  var obj = {
    el: function () {
      return stage
    },
    add: function () {

      var currentMonster = skeletonFn()

      var maxHp = currentMonster.maxHp;
      
      var hpSprite = hpBar(maxHp)

      var distanceProgress = distanceProgressFn({
        reverse: true,
        maxValue:maxHp,
        
        getData: function () {
          hpSprite.hpDel(2);

          return hpSprite.curHpP()
        },
        onEnd: function () {
          currentMonster.die()

          setTimeout(function () {
            obj.remove()
            obj.add()
          }, 1000)
        }
      })


      window.cm = currentMonster

      stage.addChild(distanceProgress)
      stage.addChild(currentMonster)
      stage.addChild(hpSprite.el())
    },

    remove: function () {
      stage.removeChildren()
    }
  }

  return obj;
}