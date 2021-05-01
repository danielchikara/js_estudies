const  producto = {
    name: "monitor de  pulgadas",
    price: 300,
    disponible: true,
}
// me retorna las llaves 
console.log(Object.keys(producto));
// me retorna los valores de esas llaves
console.log(Object.values(producto));
// me retorno todo dividido en pares 
console.log(Object.entries(producto));