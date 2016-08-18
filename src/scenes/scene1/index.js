var loader = require('../../loader');
var addResource = require('./addResource')


function addMonster() {

}

module.exports = function (render) {

  //var control = pixiLib.audioControl('http://o8c60jr2y.bkt.clouddn.com/bg.mp3')
  //control.play()

  var boxContainer = document.querySelector('#selectBoxContainer')

  
  var audioPlayObj = pixiLib.audio.loadAudio({
    hit:'/src/audio/hit.mp3'
  });
  
  addResource(loader.add.bind(loader), function () {

    var background = require('../../controllers/gfManager')();

    var manFn = require('../../controllers/man');
    var man0 = manFn()

    var scoreManagerFn = require('../../controllers/scoreManager')
    var scoreManager = scoreManagerFn()

    var bottomManagerFn = require('../../sprites/bottomManager/')
    var bottomManager = bottomManagerFn()

    bottomManager.onClickTab(function (code, cost) {
      var r0 = scoreManager.score() >= cost;
      if (r0) {
        var r=man0.equip(code);
        if (r) {
          scoreManager.del(cost);
        }
      }
    })

    var monsterManagerFn = require('../../controllers/monsterManager')
    var mm = monsterManagerFn({
      damage: function () {


        audioPlayObj.hit();
        
        return man0.attack;
      },
      onDead: function () {
        scoreManager.up();
      }
    });


    var stage = new PIXI.Container()

    bottomManager.insertBy(boxContainer)

    mm.add()

    /stage.addChild(background);
    stage.addChild(scoreManager.el())
    stage.addChild(mm.el())
    stage.addChild(man0)


    render(stage)
  });
};
