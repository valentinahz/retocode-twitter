
//app - TWITTER
var btn_tweet = document.getElementById('btn-tweet');
btn_tweet.addEventListener('click', function (){
	//tomar el valor del textarea
	//limpiar el input
	//guardar en una variable el boton


	var texto = document.getElementById('comment').value;
	document.getElementById('comment').value='';
	var contenedorComentario = document.getElementById('cont');
	var newDiv =  document.createElement('div');
	newDiv.setAttribute('class', 'color');

	var neParrafo = document.createElement('p');

	var nodoText = document.createTextNode(texto);

	neParrafo.appendChild(nodoText);
	newDiv.appendChild(neParrafo);
	contenedorComentario.appendChild(newDiv);

   var 
});









