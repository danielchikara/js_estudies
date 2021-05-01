const name = "monitor de  pulgadas";
const price = 300;
const disponible = true;

const  producto = {
    name: name,
    price: price,
    disponible: disponible
}

// agregar propiedades al objeto
producto.imagen = "imagen.jpg";

// eliminar propiedades del objeto
delete producto.disponible

console.log(producto)