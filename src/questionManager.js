/**
 * Created by zyg on 16/7/13.
 */
var questionFn = require('./questionOne.ejs')

var questions = [{
  title:'请选择你的武器',
  anwsers:['刀','枪','棍','墨镜']
}]


module.exports = function (i) {

  if(!i){
    i = 0
  }

  var html = questionFn(questions[i])

  var onClickCb = function () {}

  var fn = function (e) {
    var selectValue = e.target.dataset.value;
    if(selectValue){
      onClickCb(selectValue)
    }
  }

  return {
    insertBy:function (container) {
      container.innerHTML = html

      container.addEventListener('click',fn)

      return function unbind() {
        container.innerHTML = ''
        container.removeEventListener('click',fn)
      }
    },

    onSelect:function (cb) {
      if(cb){
        onClickCb = cb
      }
    }
  }
}