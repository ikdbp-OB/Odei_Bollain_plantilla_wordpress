class Producto {
    #stock
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    set stock(stock){
        if (stock < 0 || Number.isInteger(stock)){
            this.#stock = true
        }else if(stock == 0){
            this.#stock = false
        }else{
            throw new RangeError("Valor de stock incorrecto")
        }
    }
    get stock(){
        return this.#stock
    }
}

const teclado = new Producto(1, "Teclado", 35, 4);
teclado.stock = 8;	// 8
console.log(teclado.stock) ;
teclado.stock = -1;   // sigue 8
console.log(teclado.stock) ;
teclado.stock = 2.5;  // sigue 8
console.log(teclado.stock) ;
teclado.stock = "6";  // sigue 8