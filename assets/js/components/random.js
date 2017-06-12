'use strict';

const Coder = (coder, update) =>{
    const parent = $("<div class='container view-play f-roboto'></div>")
    const containerCoder = $("<div class='cont-coder col-xs-12 col-sm-12 col-md-4 col-lg-4'></div>");
    const imgCoder = $("<img src='' class='img-responsive img-coder'></img>");
    const containerInput = $("<div class='cont-input col-xs-12 col-sm-12 col-md-6 col-lg-6'></div>");
    const label = $("<label class='white f-rokkitt'>Ingresa su nombre:</label><br>");
    const nombre = $("<input class='form-control' type='text' placeholder='Nombre' id='focusedInput'>");
    const comprobar = $("<button type='button' class='btn btn-warning'>COMPROBAR</button>")
    
    //parent.hide();
    containerCoder.append(imgCoder);
    containerCoder.append(containerInput);
    containerInput.append(label);
    containerInput.append(nombre);
    containerInput.append(comprobar);
    parent.append(containerCoder);
    parent.append(containerInput);

    return parent;

    /*select.on('change', _ =>{
        alert("Hola");
        parent.show();
    });*/
}

const coderRandom = (JSON) => {
    const i =  Math.floor(Math.random()* JSON.length);
    state.selectedCoder = state.coder[i];
};
