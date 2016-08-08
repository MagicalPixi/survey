var pixiLib = require('pixi-lib');

var args = [{

  textures:pixiLib.getTextures('skeleton'),

  

    

    "spriteName" :  "skeleton" ,

    

  
}]



  args.push([

    

      1,

    

      6,

    
  ]);



module.exports = function spriteFn(arg){

  if(!arg){
     arg = {}
  }

  for(var k in arg){
   args[0][k] = arg[k]
  }

  var mySprite = pixiLib.getSp.apply(pixiLib,args);

  return mySprite;
}