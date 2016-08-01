var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('sceneTree'),

  

    

    "spriteName" :  "sceneTree" ,

    

  

    

    "scale.x" :  8 ,

    

  

    

    "scale.y" :  8 ,

    

  

    

    "x" :  250 ,

    

  

    

    "y" :  -120 ,

    

  
}]



  args.push([

    
  ]);



module.exports = function spriteFn(arg){

  if(!arg){
     arg = {}
  }

  for(var k in arg){
   args[0][k] = arg[k]
  }

  var mySprite = pixiLib.getIm.apply(pixiLib,args);

  return mySprite;
}