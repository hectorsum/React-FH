//*Desestructuracion

const persona = {
  nombre:'Tony',
  edad:45,
  clave:'Ironman',
  rango:'Soldado'
}

const {nombre,edad,clave} = persona

// const retornaPersona = ({nombre,edad,rango = 'Capitan'})=>{
//   console.log(nombre,edad,rango);
// }

const useContext = ({clave, nombre,edad,rango = 'Capitan'})=>{
  return {
    nombreClave:clave,
    anios:edad,
    latlng:{
      lat:14.2323,
      lng:-12.3232
    }
  }
}

const {nombreClave,anios,latlng} = useContext(persona);
const {lat,lng} = latlng;
console.log(nombreClave,anios,latlng);
console.log(lat,lng);