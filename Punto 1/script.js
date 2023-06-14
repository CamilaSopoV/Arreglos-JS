//Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let numerosAzar= [];
for(let i=0;i<10;i++){
    numerosAzar.push(Math.floor(Math.random()*100)+1);
}
console.log(numerosAzar);