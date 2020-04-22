let pantallas = ["menu", "add", "lista"];

let mostrar = function(id){

	let aMostrar = document.querySelector("#"+id);
	aMostrar.style.display = "block";
	for(pantalla of pantallas) {
		if(pantalla !== id)
		document.querySelector("#" + pantalla).style.display = "none";
	}
}
