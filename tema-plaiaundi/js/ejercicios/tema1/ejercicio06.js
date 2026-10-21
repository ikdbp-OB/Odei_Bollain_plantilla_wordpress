/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 6 · Descuentos y condiciones límite
 */
let compra = Number(prompt("Indica cuanto a costado tu compra"));
if(compra < 50){
    console.log("No hay descuento tu compra se queda en: ",compra);
}else if(compra = 50 || compra < 100){
    console.log("Tu compra ha recibido un 5% de descuento: ",compra-(compra*5/100));
}else if(compra = 100 || compra < 200){
    console.log("Tu compra ha recibido un 5% de descuento: ",-compra-(compra*10/100));
}else{
    console.log("Tu compra ha recibido un 5% de descuento: ",compra-(compra*15/100));
}