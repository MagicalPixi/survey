var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('race_flag'),

  

    

    "spriteName" :  "race_flag" ,

    

  

    

    "x" :  0.1 ,

    

  

    

  

    

    "scale.x" :  0.14 ,

    

  

    

    "scale.y" :  0.15 ,

    

  
}]



  args.push([

    
  ]);



module.exports = function spriteFn(){
  var mySprite = pixiLib.getIm.apply(pixiLib,args);

  return mySprite;
}