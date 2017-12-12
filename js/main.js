'use strict';

var copyContent = document.querySelector('.copy-content');

function repitelo100Veces() {
	var copyContent = document.querySelector('.copy-content');
	var frase = '<p>He aprendido bien cómo funcionan los bucles</p>';
	for (var i = 0; i <= 100; i++) {
		copyContent.innerHTML += frase;
	}
}
repitelo100Veces();
