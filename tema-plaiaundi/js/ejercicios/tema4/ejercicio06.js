class Producto {
    #stock
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    calcularValorStock(){
        const valor = this.precio * this.stock;
        
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

class ProductoConRecargo extends Producto {
    ca
}