var loader = require('../../loader');

var pixiLib = require('pixi-lib')

var startBtnStyle = function () {

  return {
    padding: '5px 15px',
    fontSize: '18px',
    position: 'absolute',
    left: '50%',
    top: '80%',
    transform: 'translate(-50%,-50%)',
    webkitTransform: 'translate(-50%,-50%)',
    transition:'all 0.3s',
    webkitTransition:'all 0.3s',
    border: '1px solid #999',
    background: '#fff',
    color: '#333',
    borderRadius: '4px',
    opacity:0,
    cursor:'pointer',
    zIndex:2,
  }
}

var btn = document.createElement('button')
btn.innerText = '开始游戏'

pixiLib.utils.addStyle(btn, startBtnStyle())

document.body.appendChild(btn)

window.b = btn;

module.exports = function (render, loadingManager) {

  console.log(loadingManager)

  btn.style.opacity = 1
  btn.style.top = '81%'

  btn.onclick = function () {

    btn.remove()

    loadingManager.remove()

    window.scene1(render)
  }
};
