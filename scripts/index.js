let title = document.querySelector('h1')
title.textContent = 'this is a changed text'
title.onclick = function() {
  console.log('click')
}
let image = document.querySelector('img');
document.querySelector('img').onclick = function() {
  this.src= this.getAttribute('src') === './images/loveHeart.jpg'?'./images/fire.png':'./images/loveHeart.jpg'
}