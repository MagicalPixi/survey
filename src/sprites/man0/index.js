/**
 * Created by zyg on 16/7/16.
 */
var body = require('../man0body')

var eyeL = require('../man0eye')(true)
var eyeR = require('../man0eye')()

var footL = require('../man0foot')(true)
var footR = require('../man0foot')()

module.exports = function () {
  
  var container = new PIXI.Container()

  container.x = 200
  container.y = 200


  container.addChild(body)

  container.addChild(eyeL)
  container.addChild(eyeR)

  container.addChild(footL)
  container.addChild(footR)

  var count = 0

  container.render = function () {
    if((count++)%5===0) {
      this.children.forEach(function (c) {
        c.render && c.render()
      })
    }
  }


  return container
  
}