const producto = 'monitor de 21 pulgadas';
// reemplazar texto
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('monitor','Monitor Curvo'));
// slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
// el de abajo no funciona por que no corta para atras 
console.log(producto.slice(2,1));

console.log(producto.substring(0,10));
console.log(producto.substring(8));
// este funciona sin embargo la misma funcion cambia de orden 1,2
console.log(producto.substring(2,1));


const user = 'Chikara';
// toma un solo caracter
console.log(user.substring(0,1));
console.log(user.charAt(0));