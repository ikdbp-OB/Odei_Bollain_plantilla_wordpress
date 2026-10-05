/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 5 · Igualdad estricta y coerción
 */

let resultado = (5 === 5);
let respuesta = prompt("Indica si 5 === 5 dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = (5 === "5");
respuesta = prompt("Indica si 5 === '5' dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = (5 == "5");
respuesta = prompt("Indica si 5 == '5' dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = (0 === false);
respuesta = prompt("Indica si 0 === false dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = (0 == false);
respuesta = prompt("Indica si 0 == false dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = ("" === false);
respuesta = prompt("Indica si '' === false dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = ("" == false);
respuesta = prompt("Indica si '' == false dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = (null === undefined);
respuesta = prompt("Indica si null === undefined dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}

resultado = (null == undefined);
respuesta = prompt("Indica si null == undefined dara true o false, escribe 1 para true y 0 para false");
if(respuesta == resultado){
    console.log("Correcto");
}else{
    console.log("Incorrecto");
}