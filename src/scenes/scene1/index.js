var loader = require('../../loader');
var addResource = require('./addResource')


function addMonster() {

}

module.exports = function (render) {

  //var control = pixiLib.audioControl('http://o8c60jr2y.bkt.clouddn.com/bg.mp3')
  //control.play()

  var boxContainer = document.querySelector('#selectBoxContainer')

  addResource(loader.add.bind(loader), function () {

    var manFn = require('../../controllers/man');
    var man0 = manFn()

    var scoreManagerFn = require('../../controllers/scoreManager')
    var scoreManager = scoreManagerFn()

    var bottomManagerFn = require('../../sprites/bottomManager/')
    var bottomManager = bottomManagerFn()

    bottomManager.onClickTab(function (code, cost) {
      console.log(scoreManager.score(),cost)
      if (scoreManager.score() >= cost) {
        if (man0.equip(code)) {
          scoreManager.del(cost)
        }
      }
    })

    var monsterManagerFn = require('../../controllers/monsterManager')
    var mm = monsterManagerFn({
      damage: function () {
        return man0.attack;
      },
      onDead: function () {
        scoreManager.up();
      }
    })


    var stage = new PIXI.Container()

    bottomManager.insertBy(boxContainer)

    mm.add()

    stage.addChild(scoreManager.el())
    stage.addChild(mm.el())
    stage.addChild(man0)


    render(stage)
  });
};
