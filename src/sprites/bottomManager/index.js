/**
 * Created by zyg on 16/7/13.
 */
var bottomManagerTemp = require('./bottomManager.ejs')

function bindEvent(container,cb) {
  
  container.addEventListener('click',function (e) {
    var target = e.target;
    
  })
}

module.exports = function () {

  var html = bottomManagerTemp()

  var unbind = function () {},
    clickTabCb = function () {};
  
  return {
    insertBy:function (container) {
      
      container.innerHTML = html
      
      unbind = bindEvent(container,clickTabCb)
    },
    unbind:function () {
      return unbind();
    },
    onClickTab:function (cb) {
      clickTabCb = cb ? cb : clickTabCb;
    }
  }
}