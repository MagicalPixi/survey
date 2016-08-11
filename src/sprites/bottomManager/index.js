/**
 * Created by zyg on 16/7/13.
 */
var bottomManagerTemp = require('./bottomManager.ejs')

function bindEvent(container,cb) {

  function fn(e) {
    cb(e);
  }

  function cancel() {
    lists.dataset.show = ''
  }

  container.addEventListener('click',fn)
  // document.addEventListener('click',cancel)

  return function () {
    container.removeEventListener('click',fn);
    // document.removeEventListener('click',cancel)
  }

}

module.exports = function () {

  var html = bottomManagerTemp()

  var unbind = function () {},
    unbind2 = unbind,
    clickTabCb = function () {};


  var lists ;



  function showList(e) {
    var target = e.target;

    var index = target.dataset.index;

    if(lists.dataset.show === index){
      lists.dataset.show = ''
    }else{
      lists.dataset.show = index;
    }

    e.stopPropagation()
  }

  function selectItem(e) {
    var target = e.target;

    var code = target.dataset.item;

    if(code){
      lists.dataset.show = ''
      clickTabCb(code);
    }
  }

  return {
    insertBy:function (container) {
      
      container.innerHTML = html;

      lists = document.querySelector('[lists]')

      unbind = bindEvent(container.querySelector('.select'),showList)
      unbind2 = bindEvent(lists,selectItem)
    },
    unbind:function () {
      unbind2();
      return unbind();
    },
    onClickTab:function (cb) {
      clickTabCb = cb ? cb : clickTabCb;
    }
  }
}