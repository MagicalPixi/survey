require('es6-map/implement');

var pixiLib = require('pixi-lib');

var render = pixiLib.createRender(document.body);

var scenesLoader = require.context('./scenes/');

scenesLoader.keys().filter(function(key){
  return /index\.js/.test(key);
}).map(function (key, i) {

  var sceneStart = scenesLoader(key);

  window['scene' + i] = function (render) {
    sceneStart.apply(null,arguments);
  }
});

//
// var loading = pixiLib.utils.mpLoading()
// var si = setInterval(function () {
//   loading.progress()
// },16)
//
// function close() {
//   clearInterval(si)
//   loading.el().remove()
// }
//


var loading = pixiLib.utils.mpLoading()

//document.body.appendChild(loading.el())

var loadingManager = {
  si:0,
  endCb:null,
  end:false,
  remove:function () {
    loading.el().remove()
  },
  start:function () {
    var _this = this;
    this.si = setInterval(function () {
      if(!loading.progress()){
        clearInterval(_this.si)
        _this.end = true;;
        setTimeout(function () {
          //loading.el().remove()
          _this.endCb && _this.endCb(loading)
          _this.endCb = null
        },1000)
      }
    },16)
  },
  onClose:function (cb) {
    this.endCb = cb;
    if(this.end){
      cb()
    }
  }
}

// loadingManager.start()
// loadingManager.onClose(function (loading) {
//   window.scene0(render,loadingManager)
// })


window.scene1(render)



