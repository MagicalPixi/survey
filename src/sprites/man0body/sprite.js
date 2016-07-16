var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('man0body'),

  

    

    "spriteName" :  "man0body" ,

    

  
}]



  args.push([

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getIm.apply(pixiLib,args);

  return mySprite;
}