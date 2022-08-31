

document.addEventListener('keydown', tecladoLetra);
var magico = document.querySelector(".palabra-juego"); 
var final = document.querySelector(".cartelito");
var vidas;
var punto;
var letrasUsadas;
var gg;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")

// agarra la palabra elegida y pone los guinos en su div con su clase correspondiente
function crearPalabra(){ 

    for (let i = 0; i < palabraJuego.length; i++){

    	let div = document.createElement("div");
        div.classList.add("palabra-magica");
        div.textContent = "_";
        magico.appendChild(div);
    }
}

// cambia los guiones por la letra correspondiente
function cambio(letra) {

	let { children } = magico;

	for (var i in palabraJuego) {

		if (letra === palabraJuego[i]) {

			children[i].innerHTML = letra;
			punto++;
		}
	}
}

// agarra las letras que ya se intodujeron y las pone en la lista, para no volver a usarlas
function letritaUsada(letra) {

	let uso = document.querySelector(".letras-perdidas");

	if (!letrasUsadas.includes(letra)){

		letrasUsadas.push(letra);
		uso.innerHTML = letrasUsadas; 
		console.log(letrasUsadas);		
	}
}

// solamente estetico para que el boton precionado cambie de opacidad
function colorBoton (letra) {

	document.querySelector("#"+letra).classList.add("presionado");
}

// al fallar va dibujando en canvas al monigote
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
			    // cabeza con horca
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
				gg = "Perdiste!";
				cartelito();
				vidas--;
				break;
		}
	}
}

// toma las letras del teclado y las pasa como argumento por la funcion letras()
function tecladoLetra (event) {

	let letraTeclado = event.key;

    if (letraTeclado.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraTeclado)) {
        letra(letraTeclado);
    };
}

// encargada de tomar las letras y verificar para hacer aparecer las letras encontradas, o tomarlas como error
function letra(letra) {

	colorBoton(letra);

	if (palabraJuego.includes(letra) && !letrasUsadas.includes(letra) && vidas > 0) {

		letritaUsada(letra);
		cambio(letra);

	    if (punto === palabraJuego.length) {
	    	gg = "Ganaste! "
	    	cartelito() 
	    }
	} 

	else if (!letrasUsadas.includes(letra)){

		error();
		letritaUsada(letra);
	}
}

// cartel de victoria o derrota, y saca boton de refrescar pagina
function cartelito() {

	var cartel = document.querySelector(".cartelito");
	cartel.style.display = "block";

	let div = document.createElement("p");
        div.classList.add("text-final");
        div.innerHTML = gg + "<br><br>" + " Para resetear el juego deberas refrescar la pagina :c" + "<br>" + 'apretando el boton en tu navegador (o F5), o pulsando el siguiente boton.' + "<br><br>"+ '<a onclick="volverJugar()" class="boton-reset">volver a jugar </a>';
        final.appendChild(div);
}

// para refrescar la pagina
function volverJugar() {	
	location.reload();
}