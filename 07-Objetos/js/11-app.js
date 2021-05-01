
//this nos permite ver dentro del objeto que hemos guardado
const  producto = {
    name: "monitor de  pulgadas",
    price: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El Producto: ${this.name} tiene un precio de: ${this.price}`)
    }
}

producto.mostrarInfo();