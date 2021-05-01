// Object literal
const  producto = {
    name: "monitor de  pulgadas",
    price: 300,
    disponible: true,
}

//Object constructor

function Producto(name,price){
    this.name = name;
    this.price = price;
    this.disponible = true;

}

const producto2 = new Producto('monitor de 24 pulgadas',500);
console.log(producto2);


const producto3 = new Producto('Monitopr de 50 pulgadas',800);
console.log(producto3)