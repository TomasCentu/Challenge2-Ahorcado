document.addEventListener('keydown', tecladoLetra);
var magico = document.querySelector(".palabra-juego"); // contenedor div de letras 
var vidas = 5;
var punto = 0;
var letrasUsadas = [];

// pone las letras de la palabra del juego en pantalla
function crearPalabra(){ 

    for (let i = 0; i < palabraJuego.length; i++){

    	let div = document.createElement("div");
        div.classList.add("palabra-magica");
        div.textContent = palabraJuego[i];
        magico.appendChild(div);
    }
}

function letritaUsada(letra) {

	let uso = document.querySelector(".letras-perdidas");

	if (!letrasUsadas.includes(letra)){

		letrasUsadas.push(letra);
		uso.innerHTML = letrasUsadas; 
		console.log(letrasUsadas);		
	}
}

function acierto(letra) {

	const { children } = magico;

	for (let i = 0; i < children.length; i++) {

        if (children[i].textContent === letra) {

            children[i].style.opacity = "100%";
            punto = punto +1;
        } 
    } 

    if (punto === palabraJuego.length) {
    	ganador(); 
    }
}

function error (letra) {
	vidas--;

	if (vidas === 0) {
		alert("perdiste");
	}
}

// verifica si la letra elegida esta o no en la palabra y ejecuta
function tecladoLetra (event) {

	let letraTeclado = event.key;

    if (letraTeclado.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraTeclado)) {
        letra(letraTeclado);
    };
}


function ganador() {
	document.querySelector(".teclado").style.display = "none";

	alert("ganaste");
}

function letra(letra) {

	if (palabraJuego.includes(letra) && !letrasUsadas.includes(letra)) {

		acierto(letra);
		letritaUsada(letra);	

	} else {

		error(letra);
		letritaUsada(letra);
	}
}


function reset (){
	vidas = 5;
	punto = 0;
	word();

	let uso = document.querySelector(".letras-perdidas");
	uso.innerHTML = "";

	document.querySelector(".teclado").style.display = "block";
}