// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btnS = document.getElementById("btnS");
var btnR = document.getElementById("btnR");
var btnM = document.getElementById("btnM");
var btnD = document.getElementById("btnD");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado1 = document.getElementById("resultadoSuma")
var resultado2 = document.getElementById("resultadoResta")
var resultado3 = document.getElementById("resultadoMult")
var resultado4 = document.getElementById("resultadoDiv")
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
// Añadimos el evento click a la variable "btn"
btnS.addEventListener("click",function(){
/* Obtenemos el valor de cada input accediendo a
su atributo "value" */
var n1 = inputUno.value;
var n2 = inputDos.value;
/* Llamamos a una función que permite realizar la
suma de los números y los mostramos al usuario" */
resultado1.innerHTML = suma(n1,n2);
});
btnS.addEventListener("click",function(){
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    /* Llamamos a una función que permite realizar la
    suma de los números y los mostramos al usuario" */
    resultado1.innerHTML = suma(n1,n2);
    });
    btnR.addEventListener("click",function(){
        var n1 = inputUno.value;
        var n2 = inputDos.value;
        resultado2.innerHTML = resta(n1,n2);
        });
        btnM.addEventListener("click",function(){
            var n1 = inputUno.value;
            var n2 = inputDos.value;
            resultado3.innerHTML = multiplicacion(n1,n2);
            });
            btnD.addEventListener("click",function(){
                var n1 = inputUno.value;
                var n2 = inputDos.value;
                resultado4.innerHTML = division(n1,n2);
                });

function suma(n1, n2){
    
     return parseInt(n1) + parseInt(n2);
}
function resta(n1,n2){
 return parseInt(n1) - parseInt(n2);
}
function multiplicacion(n1, n2){

     return parseInt(n1) * parseInt(n2);
}
function division(n1, n2){
    var text;
    if(n2 == 0){
        text="no puede dividir por 0";
    }else{
        text="";
        var div= parseInt(n1) / parseInt(n2);
    }
    document.getElementById("error").innerHTML = text;
    return div;
    }


function validarEntero(n1,n2){
    var text;
  
    if(Number.isInteger(n1)&& Number.isInteger(n2)){
        
        text ="";
    }else{
        text ="Entrada no valida";

    }
    return document.getElementById("error").innerHTML = text;
}

