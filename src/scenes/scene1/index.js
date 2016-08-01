var loader = require('../../loader');
var addResource = require('./addResource')

module.exports = function (render) {

  //var control = pixiLib.audioControl('http://o8c60jr2y.bkt.clouddn.com/bg.mp3')
  //control.play()

  var boxContainer = document.querySelector('#selectBoxContainer')

  addResource(loader.add.bind(loader),function(){

    var bottomManagerFn = require('../../sprites/bottomManager/')
    var bottomManager = bottomManagerFn()

    var monsterManagerFn = require('../../sprites/monsterManager')

    var mm = monsterManagerFn()

    var man0 = require('../../sprites/man0/')()

    var distanceProgressFn = require('../../sprites/distance_progress')
    var distanceProgress = distanceProgressFn({
      reverse:true,
      getData:function () {
        return 2
      },
      onEnd:function () {
        console.log('end')
      }
    })

    var stage = new PIXI.Container()

    bottomManager.insertBy(boxContainer)

    mm.add()

    stage.addChild(mm.el())
    stage.addChild(man0)

    stage.addChild(distanceProgress)


    render(stage)
  });
};
