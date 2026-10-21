/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */

const PRECIO = prompt("Precio del producto:");
let num = 0;
const NOMBRE = prompt("Nombre:");
let saldo = 100-prompt();
const IVA = 0.21;
const OPERACION = 10+5;

console.log(PRECIO);
console.log(num);
console.log(NOMBRE);
console.log(saldo);
console.log(IVA);
console.log(OPERACION);

let deposito = 100
console.log("En el deposito hay: ", deposito)
for (let i = 0; i < 5; i++){
    deposito = deposito - 7
    console.log("En el deposito hay: ", deposito)
}