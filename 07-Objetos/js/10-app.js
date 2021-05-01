const  producto = {
    name: "monitor de  pulgadas",
    price: 300,
    disponible: true,
}

const medidas = {
    peso:'1kg',
    medida: '1m'
}

const marca = {
    calcomania:'lg'
    
}



const resultado = Object.assign(producto,medidas,marca);

const resultado2 = {...producto,...medidas,...marca}

console.log(resultado);
console.log(resultado2);