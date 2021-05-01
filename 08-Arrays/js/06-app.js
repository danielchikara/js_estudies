const carrito = [];

const producto = {
    nombre: "monitor 32 Pulgadas ",
    precio: 300
}  

const producto2 = {
    nombre: "celular",
    precio: 1200
}


const producto3 = {
    nombre: "teclado",
    precio: 600
}

let resultado;
//agregar elementos sin alterar el original 
resultado = [...carrito,producto]
// agregar mas objetos al final
resultado = [...resultado,producto2]
// agregar mas objetos al inicio
resultado = [producto3,...resultado]


console.table(resultado);