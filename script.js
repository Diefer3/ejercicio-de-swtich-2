//creo variable numero
let numero; 

do {
    numero = parseInt(prompt("ingresa numero entre 1 y 10"));

    if(numero < 1  || numero > 10 || isNaN(numero)) {
        alert ("numero invalido. debes ingresar un numero entre 1 y 10");
    }
}
