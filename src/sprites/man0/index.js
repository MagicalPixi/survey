/**
 * Created by zyg on 16/7/16.
 */
var headFn = require('../man0head')
var bodyFn = require('../man0body')

var eyeFn = require('../man0eye')

var footFn = require('../man0foot')

var swordFn = require('../man0sword')
var shieldFn = require('../man0shield')

var glassesFn =  require('../man0glasses')


var gunFn = require('../man0gun')

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
    x:8,
    y:150,
    'scale.x':0.6,
    'scale.y':0.6,
  }

  var sp = fn(init)

  return sp;
})

layoutMap.set(shieldFn,function (fn) {
  var init = {
    x:140,
    y:210,
    'scale.x':0.3,
    'scale.y':0.3,
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


function layout(container,fn,arg) {

  var sp = layoutMap.get(fn)(fn,arg)

  container.addChild(sp)

  return sp;
}

module.exports = function () {
  
  var container = new PIXI.Container()

  container.x = 220
  container.y = 550
  // container.scale.x = 0.8
  // container.scale.y = 0.8


  layout(container,headFn)
  layout(container,bodyFn)
  // layout(container,eyeFn,true)
  // layout(container,eyeFn)
  layout(container,footFn,true)
  layout(container,footFn)

  var count = 0

  container.render = function () {
    if((count++)%5===0) {
      this.children.forEach(function (c) {
        c.render && c.render()
      })
    }
  }

  var equips = [];

  container.equip = function(type){

    equips.forEach(function (c) {
      container.removeChild(c)
    })

    equips = []


    switch (type){
      case 0:
        equips.push(layout(container,swordFn))
        equips.push(layout(container,shieldFn))
        break;
      case 1:
        equips.push(layout(container,gunFn))
        break;
      case 2:
        equips.push(layout(container,glassesFn))
        break;
    }
  }

  console.log(container.width)

  return container
  
}