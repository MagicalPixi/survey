var loader = require('../../loader');
var addResource = require('./addResource')

module.exports = function (render) {

  //var control = pixiLib.audioControl('http://o8c60jr2y.bkt.clouddn.com/bg.mp3')
  //control.play()

  addResource(loader.add.bind(loader),function(){

    var man = require('../../sprites/man')
    var man0 = require('../../sprites/man0')()

    var stage = new PIXI.Container()

    stage.addChild(man)

    stage.addChild(man0)

    render(stage)
  });
};
