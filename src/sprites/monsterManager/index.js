/**
 * Created by zyg on 16/7/31.
 */
var skeletonFn = require('../skeleton')
var distanceProgressFn = require('../distance_progress')

function addMonster(stage, fn) {

  var currentMonster = fn()


  return currentMonster
}


function showDelHpFn() {

  var stage = new PIXI.Container()
  stage.render = function () {
    this.children.forEach(function (c) {
      c.render && c.render()
    })
  }

  stage.name = 'showDelHp'

  return {
    el:function () {
      return stage
    },
    show:function (num) {

      stage.parent.setChildIndex(stage,stage.parent.children.length-1)

      var delHp = new PIXI.Text(num + ' ',    {
        font: 'bold italic 60px Arvo',
        fill: '#333333',
        align: 'center',
      })

      delHp.anchor.x = 0.5
      delHp.x = 320
      delHp.y = 280

      var count = 60;
      var d = 2

      delHp.render = function () {
        if((count--) > 0){
          this.x += d
          this.y += d + 2;
        }else{
          stage.removeChild(delHp)
        }
      }

      stage.addChild(delHp)
    }
  }
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

  hpText.name = 'hpText';

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
  stage.interactive = true;
  stage.render = function () {
    this.children.forEach(function (child) {
      child.render && child.render()
    })
  }


  var showHp = showDelHpFn()

  var currentMonster = null;

  stage.addChild(showHp.el())

  var obj = {
    el: function () {
      return stage
    },
    add: function () {

      var currentMonster = skeletonFn()
      currentMonster.name = 'curMonster'

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
      distanceProgress.name = 'distanceProgress'

      function touchStart() {
        hpSprite.hpDel(10)

        showHp.show(10)
      }

      currentMonster.interactive = true;

      currentMonster.on('mousedown',touchStart)
      currentMonster.on('touchstart',touchStart)

      window.cm = currentMonster

      stage.addChild(distanceProgress)
      stage.addChild(currentMonster)
      stage.addChild(hpSprite.el())
    },

    remove: function () {
      var index = stage.getChildIndex(showHp.el())

      stage.children.forEach(function (c, i) {
        if(i!==index){
          stage.removeChild(c)
        }
      })
    }
  }

  return obj;
}