var loader = require('../../loader');
var addResource = require('./addResource')

var questionManager = require('../../questionManager')


module.exports = function (render) {

  //var control = pixiLib.audioControl('http://o8c60jr2y.bkt.clouddn.com/bg.mp3')
  //control.play()

  var boxContainer = document.querySelector('#selectBoxContainer')

  addResource(loader.add.bind(loader),function(){

    var bottomManagerFn = require('../../sprites/bottomManager/')
    var bottomManager = bottomManagerFn()

    var man0 = require('../../sprites/man0/')()

    var stage = new PIXI.Container()

    stage.addChild(man0)

    bottomManager.insertBy(boxContainer)

    render(stage)
  });
};
