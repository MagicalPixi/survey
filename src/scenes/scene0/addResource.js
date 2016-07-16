var json = [
  

];
var png = [
  'man',
  'man0body',
  'man0eye',
  'man0foot'
];

module.exports = function (add,callback) {

  add(json,'json','')
  .add(png,'png','')
  .load(callback);
}