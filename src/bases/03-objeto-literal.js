const persona = {

  nombre:'Tony',
  apellido:'Stark',
  edad:45,
  direccion:{
    ciudad:'New York',
    zip: 321312321,
    lat:14.23232,
    lng:34.42323,
  }
};

//*Creando nuevo objeto

const persona2 = {...persona};
persona2.nombre = 'Peter'
console.log(persona)
console.log(persona2)