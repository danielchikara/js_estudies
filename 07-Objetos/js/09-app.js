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

Object.seal(producto);

// object seal me permite sellar un objeto para que no se puedan agregar ni eliminar llaves sin embargo puedo editar las existentes
producto.disponible = true;

// la linea de abajo fallaria
//producto.imagen  = "imagen.jpg";

//saber si un objeto esta sellado
console.log(Object.isSealed(producto))