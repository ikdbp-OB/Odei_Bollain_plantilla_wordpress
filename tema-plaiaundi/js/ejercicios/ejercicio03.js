/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 3 · Calculadora resistente a entradas incorrectas
 */

let a = Number(prompt("Numero 1"));
let b = Number(prompt("Numero 2"));

if (Number.isNaN(a) == false && Number.isNaN(b) == false) {
    console.log("Suma: ", (a+b));
    console.log("Resta: ", (a-b));
    console.log("Multiplicación: ", (a*b));
    if (b == 0) {
        console.log("Division: Error en la división")
    }else {
        console.log("División: ", (a/b));
    }
}else{
    console.log("Error datos erroneos")
}