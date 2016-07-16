var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('man0foot'),

  

    

    "spriteName" :  "man0foot" ,

    

  
}]



  args.push([

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getIm.apply(pixiLib,args);

  return mySprite;
}