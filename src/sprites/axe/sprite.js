var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('axe'),

  

    

    "spriteName" :  "axe" ,

    

  

    

    "anchor.x" :  1 ,

    

  

    

    "anchor.y" :  1 ,

    

  

    

    "scale.x" :  0.5 ,

    

  

    

    "scale.y" :  0.5 ,

    

  
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