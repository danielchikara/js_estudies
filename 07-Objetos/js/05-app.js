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

console.log(producto);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.fabricacion.pais)