var pixiLib = require('pixi-lib');

var render = pixiLib.createRender(document.body);

var scenesLoader = require.context('./scenes/');

var questionManager = require('./questionManager')

scenesLoader.keys().filter(function(key){
  return /index\.js/.test(key);
}).map(function (key, i) {

  var sceneStart = scenesLoader(key);

  window['scene' + i] = function (render) {
    sceneStart(render);
  }
});

window.scene0(render)

window.questionIndex = 0

var selectBox = document.querySelector('#select-box')


var questionOne = questionManager();

var unbind = questionOne.insertBy(selectBox)
questionOne.onSelect(function (v) {
  unbind();

  
})