/**
 * Created by zyg on 16/8/8.
 */

var goldCoinFn = require('../sprites/goldCoin')


function scoreTextFn() {
  
  var t = new PIXI.Text('0 ',{
    font: 'bold italic 60px Arvo',
    fill: '#ffffff',
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
    score:function () {
      return score;
    },
    up:function () {
      score++;
      scoreText.setText(score)
    },
    del:function (num) {
      num = parseInt(num);
      if(isNaN(num)){
        console.error('del num');
        num = 0;
      }
      var newScore = score - num;

      if(newScore >= 0){
        score = newScore
        scoreText.setText(score);
        return true;
      }
      return false;
    }
  }
}