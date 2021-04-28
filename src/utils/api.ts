// export async function getServerSideProps({ query }:any) {
//     const id = query.id;
//     try {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         const pokeman = await res.json();
//         const paddedId = ('00' + id).slice(-3);
//         pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
//         return {
//             props: { pokeman },
//         };
//     } catch (err) {
//         console.error(err);
//     }
// }

import axios from 'axios';


export function getpokemon() {
  console.log('calling get api.....');
  return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`, {});
}

