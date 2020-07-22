const personajes = ['Goku','Vegeta','Trunks'];
//*Desestructurando arreglo
const [ , ,p3] = personajes;
console.log(p3)

const retornaArreglo = () =>{
  return [
    'ABC',123
  ]
}

const [ ,numeros] = retornaArreglo();
console.log(numeros)

//*Tarea
const useState = (nombre) =>{
  return [nombre,function setNombre(nombre){
    console.log(nombre)
  }];
}

const arr = useState('Goku')
const [nombre, setNombre] = useState('Goku')
console.log(nombre);
setNombre('Hector')

