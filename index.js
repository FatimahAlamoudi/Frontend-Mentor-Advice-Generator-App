const player = document.querySelector('.player');
player.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
.then(result => result.json())
.then(data => {
  console.log(data.slip.id)
  document.querySelector('.advice-no-content').innerText = data.slip.id
  document.querySelector('.advice').innerText = ' " ' + data.slip.advice + ' " '});
})