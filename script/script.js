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
	return palabraJuego = pa.toUpperCase();
}

// para cambiar de pantallas y colocar la palabra para adivinar 

function jugar() {
	document.querySelector(".pantalla-inicio").style.display = "none"
	document.querySelector(".pantalla-juego").style.display = "block"
	document.querySelector(".fondo").style.background = "radial-gradient(circle at center bottom, rgb(159, 29, 29) 10%, rgb(96 89 126) 15%, rgb(45 53 137) 45%, rgb(17 35 85) 69%, rgb(11 26 59) 95%)";

	// para que solo se inicie una vez el juego desde el boton jugar
	// y solo se pueda resetear despues de haber jugado
	if (game === false) {

		crearTeclado();
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
	document.querySelector(".fondo").style.background = "radial-gradient(circle at center bottom, rgb(255, 1, 1) 0%, rgb(215, 127, 97) 20%, rgb(239 142 89) 30%, rgb(217, 170, 130) 40%, rgb(104, 147, 224) 70%, rgb(65, 120, 233) 90%)";
}

function volverInicio() {
	document.querySelector(".pantalla-inicio").style.display = "block"
	document.querySelector(".pantalla-palabra").style.display = "none"
	document.querySelector(".pantalla-juego").style.display = "none"
	document.querySelector(".fondo").style.background = "radial-gradient( circle at bottom, rgba(255,255,255,1) 0%, rgba(113,139,195,1) 33%, rgba(52,100,210,1) 86%, rgb(44 78 149) 100%)";
}

// crea el teclado digital en la pantalla de juego
// y le asigna la accion correspondiente para jugar
function crearTeclado() {

	let letras1 = ['q','w','e','r','t','y','u','i','o','p'];
	let letras2 = ['a','s','d','f','g','h','j','k','l','ñ'];
	let letras3 = ['z','x','c','v','b','n','m'];

	let teclado = document.querySelector(".teclado");
	let { children } = teclado;

	for (let i = 0; i < letras1.length; i++){

    	let boton = document.createElement("button");
        boton.classList.add("letras");
        boton.textContent = letras1[i].toUpperCase();
        boton.setAttribute("id", letras1[i]);
        boton.type = "button";
        boton.addEventListener('click', click);
        children[0].appendChild(boton);
    }

    for (let i = 0; i < letras2.length; i++){

    	let boton = document.createElement("button");
        boton.classList.add("letras");
        boton.textContent = letras2[i].toUpperCase();
        boton.setAttribute("id", letras2[i]);
        boton.type = "button";
        boton.addEventListener('click', click);
        children[1].appendChild(boton);
    }

    for (let i = 0; i < letras3.length; i++){

    	let boton = document.createElement("button");
        boton.classList.add("letras");
        boton.textContent = letras3[i].toUpperCase();
        boton.setAttribute("id", letras3[i]);
        boton.type = "button";
        boton.addEventListener('click', click);
        children[2].appendChild(boton);
    }
}