var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('ghostFire'),

  

    

    "animationSpeed" :  0.3 ,

    

  

    

  

    

    "spriteName" :  "ghostFire" ,

    

  

    

    "scale.x" :  0.4 ,

    

  

    

    "scale.y" :  0.4 ,

    

  
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

  var mySprite = pixiLib.getMc.apply(pixiLib,args);

  return mySprite;
}