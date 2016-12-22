function makeSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
	const sounds =  document.querySelector('.sounds');
	sounds.innerHTML = e.keyCode;
	sounds.classList.toggle('showSound');
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
for (var i=0; i<keys.length; i++) {
	keys[i].addEventListener('transitionend', removeTransition)
}

window.addEventListener('keydown', makeSound);

