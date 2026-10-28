class Libro {
    constructor(titulo, precio, unidades) {
        this.titulo = titulo;
        this.precio = precio;
        this.unidades = unidades;
    }
    calcularImporte(){
        Libro.estaDisponible()
        const importe = this.precio * this.unidades;
        return '${importe}';
    }
    estaDisponible(){
        if (this.unidades == 0){
            return true;
        }else{
            return false;
        }
    }
}

const libro1 = new Libro("prueba", 12, 3)
const libro2 = new Libro("prueba", 20, 0)
console.log(libro1);
console.log(libro2);