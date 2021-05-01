// use strict me obliga a colocar   ; y ser mas extricto con el codigo 
"use strict";
const  producto = {
    name: "monitor de  pulgadas",
    price: 300,
    disponible: true,
        informacion: {
            medidas:{
                peso: '1kg',
                medida: '1m'    
            },  
            fabricacion:{
                pais:'china'
            }
            
    }
}
Object.freeze(producto);
// me permite congelar un objeto para no poder hacerle cambios  la linea de abajo arrojaria error
//producto.disponible = false;
// me indica si un producto esta congelado 
console.log(Object.isFrozen(producto))
//  destructurar un objeto 