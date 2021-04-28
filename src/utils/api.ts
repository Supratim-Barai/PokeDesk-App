
import axios from 'axios';

export function getpokemon() {
  console.log('calling get api.....');
  return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`, {});
}

export function getpokemonDetails(id: any) {
  console.log('calling get api.....');
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
