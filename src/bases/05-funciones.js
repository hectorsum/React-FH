const saludar = function(nombre){
  return `Hola, ${nombre}`
}
const saludar2 = (nombre)=>`Hola, ${nombre}`;
const saludar3 = ()=>`Hola Mundo`;

console.log(saludar('Hector'))
console.log(saludar2('Martin'))
console.log(saludar3())

//*Retornando un Objeto
const getUser = () =>({
    uid:'ABC123',
    username:'hectorsum'
  })

function getUsuarioActivo(nombre){
  return {
    uid:'ABC123',
    username: nombre
  }
}
//*Tarea
//1. Convertir a arrow function
const getUsuarioActivo2 = (nombre)=>({
    uid:'ABC123',
    username: nombre
})

console.log(getUsuarioActivo2('Hector'))