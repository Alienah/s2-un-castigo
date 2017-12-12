'use strict';
var copyContent = document.querySelector('.copy-content');
var selectColor = '<select class="color-select" name="color-select"><option value="blanco">Blanco</option><option value="azul">Azul</option><option value="rojo">Rojo</option><option value="verde">Verde</option><option value="amarillo">Amarillo</option><option value="rosa">Rosa</option></select>'
var frase = '<p>He aprendido bien cómo funcionan los bucles</p>';
var line = '';
function repitelo100Veces() {


	for (var i = 0; i <= 100; i++) {
		line += '<div>' + frase + selectColor +'</div>';
	}
	copyContent.innerHTML = line;
}
repitelo100Veces();
