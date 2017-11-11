


window.addEventListener("load", up);

var btn_tweet = document.getElementById('btn-tweet');
var texto = document.getElementById('comment');
var contador = document.getElementById('contador');
var letras = contador.innerHTML = 140;

//Evento para activar el botón

function up() {
    btn_tweet.addEventListener("click", send);
    texto.addEventListener("keyup", valid);
    texto.addEventListener("keydown", grow);
}
    
function send(tweet) {
    tweet.preventDefault();
    var text = comment.value;
    addMsn(text);
    texto.value = "";
    contador.innerHTML = 140;
    contador.classList.remove("colorfinal");
    contador.classList.remove("colormedio");
    resize();
    btn_tweet.disabled = true;
}

function valid() {
    btn_tweet.disabled = false;
    var longitud = texto.value.trim().length;
    contar(longitud);
    changeColor(longitud);
}

function addMsn(text) {
    var newDiv = document.createElement('div');
    newDiv.innerText = text;
    var cont = document.getElementById("cont");
    cont.insertBefore(newDiv, cont.childNodes[1]).classList.add("box");
}

//Función contador de caracteres
function contar(longitud){
 if (longitud <= letras ) {
 	contador.innerHTML = letras - longitud;
 } else {
 	contador.innerHTML = letras - longitud;
 }	
 if(longitud == 0){
 	document.getElementById('btn-tweet').disabled = true;
 }
 if (longitud > letras){
   document.getElementById('btn-tweet').disabled = true;
  }	
}

//Función cambio de color
function changeColor(longitud) {
    if(longitud > 80) {
        contador.classList.add("colormedio");
    }

    if(longitud > 110) {
        contador.classList.add("colorfinal");
        contador.classList.remove("colormedio");
    }

    if(longitud < 80) {
        contador.classList.remove("colormedio");
    }

    if(longitud < 110) {
        contador.classList.remove("colorfinal");
    }
}

function grow() {
    comment.style.cssText = "height: auto";
    comment.style.cssText = "height: " + comment.scrollHeight + "px";
}

function resize() {
    comment.style.cssText = "height: auto";
}
