var listaPalabras = [
	"cosa",
	"cosas"
]

// para cambiar de pantallas

function jugar() {
	document.querySelector(".pantalla-inicio").style.display = "none"
	document.querySelector(".pantalla-juego").style.display = "block"
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