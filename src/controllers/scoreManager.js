/**
 * Created by zyg on 16/8/8.
 */

var goldCoinFn = require('../sprites/goldCoin')


function scoreTextFn() {
  
  var t = new PIXI.Text('0 ',{
    font: 'bold italic 60px Arvo',
    fill: '#333333',
    align: 'center',
  })

  t.x = 80;
  t.y = 30;
  
  return {
    el:function () {
      return t;
    },
    setText:function (v) {
      v = parseInt(v)
      if(isNaN(v)){
        v = 0
      }
      t.text = v + ' ';
    }
  }
}

module.exports = function () {
  
  var stage = new PIXI.Container()
  var scoreText = scoreTextFn()
  var goldCoin  = goldCoinFn()

  var score = 0;

  stage.addChild(goldCoin)
  stage.addChild(scoreText.el())
  
  return {
    el:function () {
      return stage;
    },
    up:function () {
      scoreText.setText((score++))
    },
    del:function (num) {
      var newScore = score - num;

      if(newScore > 0){
        score = newScore
        return true;
      }
      return false;
    }
  }
}