/**
 * Created by zyg on 16/7/31.
 */
var skeletonFn = require('../sprites/skeleton/index')
var distanceProgressFn = require('../sprites/distance_progress/index')

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
      delHp.x = delHp.initX = 360
      delHp.y = delHp.initY = 320

      var count = 0,
        r = 30;

      var circleTrace = pixiLib.math.circleTraceThunk(r)
      
      delHp.render = function () {
        if((count++) < r){
          var d = r - circleTrace(count);
          d *= 6;

          this.x = this.initX + d;
          this.y = this.initY + count * 6
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

      return curHp !== 0;
    },
    curHpP:function () {
      return curHp / maxHp
    }
  }
}

/**
 * @param options
 * @returns {{el: obj.el, add: obj.add, remove: obj.remove}}
 */
module.exports = function (options) {

  if(!options.onDead){
    options.onDead = function () {}
  }


  var stage = new PIXI.Container()
  stage.interactive = true;
  stage.render = function () {
    this.children.forEach(function (child) {
      child.render && child.render()
    })
  }

  stage.y = 80;


  var showHp = showDelHpFn()

  var currentMonster = null;

  var autoDamage = 2;

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
          hpSprite.hpDel(autoDamage);

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
        var damage = options.damage()

        if(hpSprite.hpDel(damage)){
          showHp.show(damage)
        }
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
      stage.removeChildren()
      stage.addChild(showHp.el())

      options.onDead()
    }
  }

  return obj;
}