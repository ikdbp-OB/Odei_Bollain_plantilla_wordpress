const producto = {
    nombre: "A",
    precio: 20,
    proveedor: {nombre: "b"}
}

const alias = producto;
producto.precio = 30;
alias.proveedor = {nombre: "c"}

console.log(producto)
console.log(alias)