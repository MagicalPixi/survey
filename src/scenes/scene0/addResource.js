var json = [
  

];
var png = [
  'man0body',
  'man0eye',
  'man0foot',
  'man0sword',
  'man0shield'
];

module.exports = function (add,callback) {

  add(json,'json','')
  .add(png,'png','')
  .load(callback);
}