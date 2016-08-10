/**
 * Created by zyg on 16/7/13.
 */
var bottomManagerTemp = require('./bottomManager.ejs')

function bindEvent(container,cb) {

  var lists = document.querySelector('[lists]')

  function fn(e) {
    var target = e.target;

    var index = target.dataset.index;

    if(lists.dataset.show === index){
      lists.dataset.show = ''
    }else{
      lists.dataset.show = index;
    }
  }

  container.addEventListener('click',fn)

  return function () {
    container.removeEventListener('click',fn);
  }

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