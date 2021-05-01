const producto = {
    nombre: "monitor 32 Pulgadas ",
    precio: 300
} 

// destructuring
const {nombre} = producto;

console.log(nombre);

//destructuring con arreglos
const numeros = [10,20,30,40,50]
// obtiene le primer valor y el tercero 
const [primero, , tercero] = numeros;


console.log(primero,tercero)