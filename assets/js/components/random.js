'use strict';

const Coder = (coder, update) =>{
    const parent = $("<div class='container view-play f-roboto'></div>")
    const containerCoder = $("<div class='cont-coder col-xs-12 col-sm-12 col-md-4 col-lg-4'></div>");
    const imgCoder = $("<img src='assets/img/' class='img-responsive img-coder'></img>");
    //<img src="assets/img/mexico/Alma%20Patricia%20Jimenez.JPG" alt="">
    const containerInput = $("<div class='cont-input col-xs-12 col-sm-12 col-md-6 col-lg-6'></div>");
    const label = $("<label class='white f-rokkitt'>Ingresa su nombre:</label><br>");
    const nombre = $("<input class='form-control' type='text' placeholder='Nombre' id='focusedInput'>");
    const comprobar = $("<button type='button' class='btn btn-warning comprobar'>COMPROBAR</button>")

    parent.hide();
    containerCoder.append(imgCoder);
    containerCoder.append(containerInput);
    containerInput.append(label);
    containerInput.append(nombre);
    containerInput.append(comprobar);
    parent.append(containerCoder);
    parent.append(containerInput);


    $('.select').on('change', _ =>{
        //alert("Hola");
        parent.show();

        select = $(this).val();
        if(select === Lima){
            state.peru = peru;
            mostrarCoderPeru(coder, imgCoder, update);
        }else{
            state.mexico = mexico;
            mostrarCoderMex(coder, imgCoder, update);
        }
    });
    return parent;
}

const mostrarCoderPeru = (coder, imgCoder, update) =>{
    imgCoder.attr("src", coder[Math.floor(Math.random()* (state.peru).length)].image);

    return imgCoder;
}

const mostrarCoderMex = (coder, imgCoder, update) =>{
    imgCoder.attr("src", coder[Math.floor(Math.random()* (state.mexico).length)].image);

    return imgCoder;
}

/*function filter() {
    let selectName = "";
    selectName = (sede == 0) ? peru[i].sede : mexico[i].sede;
    return filter;
}*/

function comprobar() {
    if (getInputValue() === selectName()) {
        alert("Correcto");
        setTimeout(mostrarCoder(), 3000);
    } else {
        alert("Sigue intentando");
    }
};

$(document).ready(function() {
    $(".comprobar").click(comprobar);
});

