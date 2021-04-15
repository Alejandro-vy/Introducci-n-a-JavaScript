// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn = document.getElementById("btn");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
// Añadimos el evento click a la variable "btn"
btn.addEventListener("click",function(){

var numero1 = inputUno.value;
var numero2 = inputDos.value;

resultado.innerHTML = random(numero1,numero2);
});

function random(numero1,numero2){
    return Math.round(Math.random()*(numero2-numero1)+parseInt(numero1));
}