// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes';

import { heroes } from './data/heroes'

const getHeroeById = (id) => heroes.find((heroe)=> heroe.id === id)

console.log(getHeroeById(2))