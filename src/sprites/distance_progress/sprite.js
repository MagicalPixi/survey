/**
 * Created by zyg on 16/5/19.
 */
var pxiLib = require('pixi-lib');

var w = pxiLib.createRender.DEFAULT_WIDTH * 0.9;

module.exports = {
  base: function () {


    var graphics = new PIXI.Graphics();

    graphics.beginFill(0xFFFFFF);

    graphics.lineStyle(6, 0x512E0F, 1);

    graphics.drawRect(w / 18, w / 18, w, w / 18);

    graphics.endFill();

    return graphics;
  },
  progress: function () {
    var graphics = new PIXI.Graphics();

    graphics.updateWidth = function (width ,reverse) {
      if(width > w){
        width = w;
      }
      graphics.clear();

      graphics.beginFill(0x512E0F);

      graphics.lineStyle(1, 0x512E0F, 1);

      graphics.drawRect(w/18, w / 18,width, w / 18);

      graphics.endFill();

      return reverse? width <= 0 :width === w;
    }
    
    graphics.maxWidth = w;

    return graphics;
  }
}