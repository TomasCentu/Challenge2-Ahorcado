// agrega una palabra a las ya existentes

function agregar() {

	var texto = document.querySelector('.palabra-input').value;

	if (texto.length > 3 && /^[A-Z]+$/i.test(texto) && texto.length < 8) {

		listaPalabras.push(texto);

		alert("palabra ingresada con exito!");
	} else {

		alert("La palabra tiene que ser solo letras y tener entre 4 a 7 caracteres!");	
	}
}