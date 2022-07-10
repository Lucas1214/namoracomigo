var botao = document.getElementById('nao');
botao.addEventListener('mousemove', change);
function change() {
  var i = Math.floor(Math.random() * 500) + 1;
  var j = Math.floor(Math.random() * 500) + 1;
  botao.style.left = i + 'px';
  botao.style.top = j + 'px';
}
