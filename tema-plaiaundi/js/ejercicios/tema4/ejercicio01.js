const libro = {
    titulo: Prueba,
    precio: 12,
    unidades: 3,
    calcularImporte(){
        const importe = this.precio * this.unidades;
        return '${importe}$';
    }
}

console.log(libro.calcularImporte());