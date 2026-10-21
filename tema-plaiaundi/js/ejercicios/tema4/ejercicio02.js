const cuenta1 = {
    titular: Jose,
    saldo: 1300,
    describir(){
        return "${this.titular}: ${this.saldo}"
    }
}

const cuenta2 = {
    titular: Maria,
    saldo: 1200,
}

console.log(cuenta1.describir())
console.log(cuenta2.describir = cuenta1.describir())