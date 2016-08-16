/**
 * Created by zyg on 16/7/16.
 */
var headFn = require('../sprites/man0head/index')
var bodyFn = require('../sprites/man0body/index')

var eyeFn = require('../sprites/man0eye/index')

var footFn = require('../sprites/man0foot/index')

var swordFn = require('../sprites/man0sword/index')
var shieldFn = require('../sprites/man0shield/index')

var glassesFn =  require('../sprites/man0glasses/index')

var axeFn = require('../sprites/axe');

var gunFn = require('../sprites/man0gun/index')

var layoutMap = new Map()

var maxWidth = 200;

layoutMap.set(bodyFn,function (fn) {

  var init = {
    x:0,
    y:140,
    'scale.x':0.7,
    'scale.y':0.7
  }

  var sp = fn(init)

  sp.x = ( maxWidth - sp.width )/ 2

  return sp;
})

layoutMap.set(headFn,function(fn){

  var init = {
    x:0,
    y:0,
    'scale.y':0.8
  }

  var sp = fn(init)

  return sp
})

layoutMap.set(eyeFn,function (fn,side) {

  var init = {
    x: side ? 30 : 125,
    y:50,
    'scale.x':0.7,
    'scale.y':0.7
  }

  var sp = fn(init)

  return sp;
})

layoutMap.set(footFn,function (fn, side) {

  var init = {
    side:side,
    x: side ? 40 : 115,
    y:280,
    'scale.x':0.5,
    'scale.y':0.5
  }

  var sp = fn(init)

  return sp;

})

layoutMap.set(swordFn,function (fn) {
  var init = {
    x:55,
    y:230,
    'scale.x':0.6,
    'scale.y':0.6,
  }

  var sp = fn(init)

  return sp;
})

layoutMap.set(axeFn,function (fn) {
  var init = {
    x:55,
    y:250,
    'scale.x':0.5,
    'scale.y':0.5,
    'anchor.x':1,
    'anchor.y':1,
  }

  var sp = fn(init)

  return sp;
})

layoutMap.set(shieldFn,function (fn) {
  var init = {
    x:130,
    y:180,
    'scale.x':0.4,
    'scale.y':0.4,
  }

  var sp = fn(init)

  return sp;
})

layoutMap.set(gunFn,function (fn) {
  
  var init = {
    x:60,
    y:200,
    'scale.x':0.6,
    'scale.y':0.6,
  }
  
  var sp = fn(init)
  
  return sp
})

layoutMap.set(glassesFn,function (fn) {
  var prop={
    x:-18,
    y:30,
    'scale.x':0.6,
    'scale.y':0.6
  }

  var sp = fn(prop)

  return sp
})


function layout(container,fn,arg,index) {

  var sp = layoutMap.get(fn)(fn,arg)

  if(index===undefined){
    container.addChild(sp)
  }else{
    container.addChildAt(sp,index)
  }

  return sp;
}

function equipClass(type,atk,equipFn) {
  return {
    type:type,
    atk:atk,
    equipFn:equipFn,
  }
}

module.exports = function () {
  
  var container = new PIXI.Container()

  container.x = 220
  container.y = 550



  container.equipments = [];
  container.initAttack = container.attack = 15;


  layout(container,headFn)
  layout(container,bodyFn)
  // layout(container,eyeFn,true)
  // layout(container,eyeFn)
  layout(container,footFn,true)
  layout(container,footFn)

  //layout(container,axeFn);

  var count = 0

  container.render = function () {
    if((count++)%5===0) {
      this.children.forEach(function (c) {
        c.render && c.render()
      })
    }
  }
  // var equips = [];
  // container.equip = function(type){
  //
  //   equips.forEach(function (c) {
  //     container.removeChild(c)
  //   })
  //
  //   equips = []
  //
  //   switch (type){
  //     case 0:
  //       equips.push(layout(container,swordFn))
  //       equips.push(layout(container,shieldFn))
  //       break;
  //     case 1:
  //       equips.push(layout(container,gunFn))
  //       break;
  //     case 2:
  //       equips.push(layout(container,glassesFn))
  //       break;
  //   }
  // }

  var codeMap = {
    d1:equipClass('d',10,shieldFn),
    d2:equipClass('d',25,shieldFn),
    w1:equipClass('w',50,swordFn),
    w2:equipClass('w',85,axeFn),
  };

  //layout(container,shieldFn)

  container.equip = function (code) {
    if(container.equipments.indexOf(code) === -1){
      container.equipments.push(code);

      container.attack = container.initAttack +
        container.equipments.reduce(function (i, next) {
          return i + codeMap[next].atk;
        },0);

      var equipObj = codeMap[code];

      container.removeChild(container[equipObj.type]);
      container[equipObj.type] = layout(container,equipObj.equipFn,null,0);

      return true;
    }
  };

  return container
  
}