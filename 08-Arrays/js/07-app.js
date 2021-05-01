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

const producto4 = {
    nombre: "mouse",
    precio: 1500
}
// agregar al final del array 
carrito.push(producto,producto2,producto4);

//agregar al inicio del array
carrito.unshift(producto3);

// eliminar ultimo elemento de un arreglo
//carrito.pop();
console.table(carrito)

// eliminar en una pocision e indico hasta donde elimina
carrito.splice(1,1);

//eliminar del inicio de un arreglo
carrito.shift();

console.table(carrito);