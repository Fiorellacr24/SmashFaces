'use strict';

const Coder = (update) =>{
	const parent = $("<div class='container'></div>")
	const containerCoder = $("<div class='cont-coder'></div>");
	const imgCoder = $("<div class='img-coder'></div>");
	const label = $("<label>Ingresa su nombre:</label>");
	const nombre = $("<input type='text' placeholder='Nombre'>");
	const comprobar = $("<button>Comprobar</button>")
	
	containerCoder.append(imgCoder);
	containerCoder.append(label);
	containerCoder.append(nombre);
	containerCoder.append(comprobar);
	parent.append(containerCoder);

	return parent;
}

/*const mostrarCoder = (coder, imgCoder, update) =>{
	imgCoder.attr("src", coder[Math.floor(Math.random()*40)].image);
	
	return imgCoder;
}*/