console.log('Hello World')
//*Const: Variables que no se pueden renombrar
const nombre = 'Hector';
//* let: Puede renombrar la variable
// let apellido = 'Herrera';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4

if (true){
  //*Variable de scope, el valorDado solo va existir dentro del if
  let valorDado = 5;
  //* Es permitido, porque no hay dos constantes en el mismo scope que se llamen igual
  const nombre = 'Martin'
  console.log(`Dentro de if ${valorDado}`)
  console.log(`Dentro de if ${nombre}`)
}
console.log(`Fuera de if ${valorDado}`)

// console.log(nombre,apellido,valorDado)