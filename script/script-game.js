document.addEventListener('keydown', tecladoLetra);

const palabraContenedor = document.querySelector(".palabra-juego"); 
const cartelFinal = document.querySelector(".cartelito");
const tituloFinal = document.querySelector(".titulo-final");
const usadas = document.querySelector(".letras-perdidas");

var vidas, punto, letrasUsadas, finalJuego;

// seleccion de canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

// toma el evento de click en los botones del teclado digital
function click(event) {
	let boton = event.target;
	boton.disabled = true;
	let a = boton.textContent;
	letra(a);	
}

// toma las letras del teclado y las pasa como argumento por la funcion letras()
function tecladoLetra (event) {

	let letraTeclado = event.key;
	let boton = document.getElementById(letraTeclado);


    if (letraTeclado.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraTeclado)) {
        letra(letraTeclado.toUpperCase());
        boton.disabled = true;
    }
}

// agarra la palabra elegida y pone los guiones en su div con su clase correspondiente
function crearPalabra(){ 

    for (let i = 0; i < palabraJuego.length; i++){

    	let div = document.createElement("div");
        div.classList.add("letra-oculta");
        div.textContent = "_";
        palabraContenedor.appendChild(div);
    }
}

// cambia los guiones por la letra correspondiente en la palabra oculta
function cambioLetra(letra) {

	let { children } = palabraContenedor;

	for (var i in palabraJuego) {

		if (letra === palabraJuego[i]) {

			children[i].innerHTML = letra.toUpperCase();
			punto++;
		}
	}
}

// agarra las letras que ya se intodujeron y las pone en la lista de letras usadas
// para no volver a usarlas en el juego
function letritaUsada(letra) {

	if (!letrasUsadas.includes(letra)){

		letrasUsadas.push(letra);
		usadas.innerHTML = letrasUsadas; 
		console.log(letrasUsadas);		
	}
}

// al fallar la letra, va dibujando en canvas al monigote por partes
// con respecto a las vidas que se tengan en el momento
function error () {

	if (punto !== palabraJuego.length) {

		switch (vidas) {

			case 7:
			    // base de horca
			    ctx.beginPath();
				ctx.moveTo(0, 135);      
				ctx.lineTo(400, 135);      
				ctx.moveTo(40, 135);      
				ctx.lineTo(60, 110);       
				ctx.moveTo(80, 135);       
				ctx.lineTo(60, 110)     
				ctx.moveTo(60, 135);
				ctx.lineTo(60, 10);
				ctx.moveTo(60, 10);
				ctx.lineTo(180, 10);
				ctx.moveTo(60, 30);
				ctx.lineTo(90, 10);
				ctx.stroke();
				vidas--;
				break;
			case 6:
			    // cabeza con soga
			    ctx.beginPath(); 
				ctx.moveTo(180, 40);
				ctx.arc(180, 30, 10, 2*Math.PI, 0)
				ctx.moveTo(180, 10);
				ctx.lineTo(190, 30);
				ctx.moveTo(180, 10);
				ctx.lineTo(170, 30);
				ctx.moveTo(170, 30);
				ctx.lineTo(180, 40);
				ctx.stroke();
				vidas--;
				break;
			case 5:
			    // torso
			    ctx.beginPath();
				ctx.moveTo(180, 40);
				ctx.lineTo(180, 90);
				ctx.stroke();
				vidas--;
				break;
			case 4:
			    // brazo izq
			    ctx.beginPath();
				ctx.moveTo(180, 45);
				ctx.lineTo(190, 70);
				ctx.stroke();
				vidas--;
				break;
			case 3:
			    //brazo der
			    ctx.beginPath();
				ctx.moveTo(180, 45);
				ctx.lineTo(170, 70);
				ctx.stroke();
				vidas--;
			    break;
			case 2:
			    // pierna izq
			    ctx.beginPath();
				ctx.moveTo(180, 90);
				ctx.lineTo(175, 120);
				ctx.stroke();
				vidas--;
			    break;
			case 1:
				// pierna der
				ctx.beginPath();
				ctx.moveTo(180, 90);
				ctx.lineTo(195, 120);
				ctx.stroke();
				// cartel de derrota
				finalJuego = "Perdiste!";
				fin();
				vidas--;
				break;
		}
	}
}

// toma las letras elegidas y verifica que esten dentro de la palabra oculta del juego
// para hacer aparecer las letras encontradas en pantalla, o tomarlas como error
function letra(letra) {

	if (palabraJuego.includes(letra) && !letrasUsadas.includes(letra) && vidas > 0) {

		cambioLetra(letra);

		// si se aciertan todas las letras sale el cartel de ganador
	    if (punto === palabraJuego.length) {
	    	finalJuego = "Ganaste! "
	    	fin() 
	    }
	} 

	else if (!letrasUsadas.includes(letra)){

		error();	
	}
	letritaUsada(letra);
}

// cartel de victoria o derrota, y saca boton de refrescar pagina
function fin() {

	cartelFinal.style.display = "block";

    tituloFinal.innerHTML = finalJuego;
}

// resetea valores para volver a jugar
function volverJugar() {	
	cartelFinal.style.display = "none";
	tituloFinal.innerHTML = "";
	palabraJuego = "";
	palabraContenedor.innerHTML = "";
	letrasUsadas = "";
	usadas.innerHTML = letrasUsadas; 

	for (let i = 97; i <= 122; i++){

		let letra = String.fromCharCode(i); 
		let boton = document.getElementById(letra);
		boton.disabled = false;
	}

	let letra = String.fromCharCode(164); 
	let boton = document.getElementById("ñ");
	boton.disabled = false;

	word();
	crearPalabra();
	vidas = 7;
	punto = 0;
	letrasUsadas = [];
}

function reset() {	
	location.reload();
}