/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 15 · Prueba
 */

let numero = Number(prompt("Indica un numero"));

const resultado = (numero) => {

    if (numero % 2 == 0){
        resul = "PAR";
    }else{
        resul = "INPAR";
    }
    return resul;
}

console.log(resultado);