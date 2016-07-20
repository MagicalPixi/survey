var loader = require('../../loader');
var addResource = require('./addResource')

var questionManager = require('../../questionManager')

module.exports = function (render) {

  //var control = pixiLib.audioControl('http://o8c60jr2y.bkt.clouddn.com/bg.mp3')
  //control.play()

  window.questionIndex = 0

  var selectBox = document.querySelector('#select-box-container')

  var questionIndex = 0
  var questionOne = questionManager(questionIndex);


  addResource(loader.add.bind(loader),function(){

    var man0 = require('../../sprites/man0')()

    var stage = new PIXI.Container()

    stage.addChild(man0)


    var unbind = questionOne.insertBy(selectBox)
    questionOne.onSelect(function (v,index) {
      console.log(v,index)

      man0.equip(index)
    })
    questionOne.onSubmit(function () {
      unbind()
    })

    render(stage)
  });
};
