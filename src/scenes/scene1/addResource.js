var json = [
  'skeleton',
];
var png = [
  'man0body',
  'man0eye',
  'man0foot',
  'man0sword',
  'man0shield',
  'man0glasses',
  'man0gun',
  'man0head',
  'sceneTree',
  'goldCoin',
  'axe',
];

module.exports = function (add,callback) {

  add(json,'json','')
  .add(png,'png','')
  .load(callback);
}