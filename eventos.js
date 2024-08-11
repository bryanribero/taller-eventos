document.addEventListener("DOMContentLoaded", function(){

    let contenedor = document.getElementsByTagName('div')[0];

    contenedor.addEventListener('click', function(){
        alert('Hola! Soy el div');
    });
});

function boton(event){

    alert('Hola!');
    event.stopPropagation();

}