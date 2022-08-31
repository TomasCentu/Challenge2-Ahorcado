var listaPalabras = [
	"alura",
	"encriptador",
	"social",
	"intel",
	"programa"
]

var palabraJuego = String;
var game = false;

function word () {
	var pa = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
	return palabraJuego = pa;
}

// para cambiar de pantallas y colocar la palabra para adivinar 

function jugar() {
	document.querySelector(".pantalla-inicio").style.display = "none"
	document.querySelector(".pantalla-juego").style.display = "block"

	// para que solo se inicie una vez el juego
	if (game === false) {

		word();

		crearPalabra();
		vidas = 7;
		punto = 0;
		letrasUsadas = [];

		game = true;
	}	
}

function nuevaPalabra() {
	document.querySelector(".pantalla-inicio").style.display = "none"
	document.querySelector(".pantalla-palabra").style.display = "block"
}

function volverInicio() {
	document.querySelector(".pantalla-inicio").style.display = "block"
	document.querySelector(".pantalla-palabra").style.display = "none"
	document.querySelector(".pantalla-juego").style.display = "none"
}