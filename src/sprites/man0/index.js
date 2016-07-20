/**
 * Created by zyg on 16/7/16.
 */
var body = require('../man0body')

var eyeL = require('../man0eye')(true)
var eyeR = require('../man0eye')()

var footL = require('../man0foot')(true)
var footR = require('../man0foot')()

var sword = require('../man0sword')()
var shield = require('../man0shield')()

var glasses =  require('../man0glasses')()

var gun = require('../man0gun')()

module.exports = function () {
  
  var container = new PIXI.Container()

  container.x = 200
  container.y = 380


  container.addChild(body)

  container.addChild(eyeL)
  container.addChild(eyeR)

  container.addChild(footL)
  container.addChild(footR)


  //container.addChild(glasses)

  //container.addChild(gun)

  var count = 0

  container.render = function () {
    if((count++)%5===0) {
      this.children.forEach(function (c) {
        c.render && c.render()
      })
    }
  }

  container.equip = function(type){

    [shield,sword,gun,glasses].forEach(function (s) {
      container.removeChild(s)
    })

    switch (type){
      case 0:
        container.addChild(shield)
        container.addChild(sword)
        break;
      case 1:
        container.addChild(gun)
        break;
      case 2:
        container.addChild(glasses)
        break;
    }
  }

  return container
  
}