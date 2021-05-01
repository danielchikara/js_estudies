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
//  destructurar un objeto 
const {informacion: {fabricacion}} = producto 
//
console.log(fabricacion)