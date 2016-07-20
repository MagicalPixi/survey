/**
 * Created by zyg on 16/7/13.
 */
var questionFn = require('./questionOne.ejs')

var questions = [{
  title:'请选择你的武器',
  anwsers:['刀','枪','墨镜']
}]


module.exports = function (i) {

  if(!i){
    i = 0
  }

  var html = questionFn(questions[i])

  var onClickCb = function () {};
  var onSubmit = function () {};

  function fn(e) {
    var et = e.target
    var selectValue = e.target.dataset.value;
    var index = parseInt(e.target.dataset.index);

    if(selectValue){
      onClickCb(selectValue,index)
    }else if(et.id === 'selectSubmit'){
      onSubmit()
    }
  }


  return {
    insertBy:function (container) {
      container.innerHTML = html

      container.addEventListener('click',fn)

      return function unbind() {
        container.classList.add('hidden')
        container.removeEventListener('click',fn)

        setTimeout(function(){
          container.innerHTML = ''
          container.classList.remove('hidden')
        },500)
      }
    },

    onSelect:function (cb) {
      if(cb){
        onClickCb = cb
      }
    },
    onSubmit:function (cb) {
      if(cb){
        onSubmit = cb
      }
    }
  }
}