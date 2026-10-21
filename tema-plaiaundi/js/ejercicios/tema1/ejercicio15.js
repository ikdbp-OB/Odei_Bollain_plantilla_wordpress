/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 15 · Prueba
 */

let notas = [5, 8, 3, 10, 6]
let aprobado = 0
for (const nota of notas){
    suma += nota
    if (nota > 5){
        aprobado += 1;
    }
}
let media = suma/notas.length;
console.log (suma);
console.log (media);
console.log (aprobado);