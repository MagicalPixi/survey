/**
 * Created by zyg on 16/8/18.
 */


var ghostFire = require('../sprites/ghostFire2');
var background = require('../sprites/background/')();

module.exports = function () {

  var stage = new PIXI.Container();

  var f1 = ghostFire({
    x:100,
    y:100,
  });
  var f2 = ghostFire({
    x:500,
    y:160,
  });
  var f3 = ghostFire({
    x:30,
    y:300,
  });

  stage.addChild(background);
  stage.addChild(f1);
  stage.addChild(f2);
  stage.addChild(f3);


  return stage;
};