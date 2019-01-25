function playSong(e) {
    
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        
    key.classList.add('music');
    audio.currentTime = 0;
    audio.play();
}

function removeColorButton(e) {
    if(e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('music');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeColorButton));
window.addEventListener("keyup", playSong);
