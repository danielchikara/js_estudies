const meses = ['enero' ,'febrero', 'marzo', 'abril','mayo','junio']

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);
meses.push('mayo')
// ver cuanto mide un arreglo
console.log(meses.length);

for(let i =0;  i < meses.length; i++) {
    console.log(meses[i]);

}

