function playSong(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"`);
    if(!audio) return;

    key.classList.add('music');
    audio.currentTime = 0;
    audio.play();
  }
  
  function removeColoringButton(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('music');
  }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeColoringButton));
    window.addEventListener('keyup', playSong);