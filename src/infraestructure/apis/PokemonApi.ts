import axios from "axios"
import { Pokemon } from '../../core/model/pokemon';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const PokemonApi = {
    
    getAll: () => api.get('/pokemon').then(async response => {
        const list: Pokemon[] = await Promise.all(
            response.data.results.map((pokemon: Pokemon) => {
                return api.get<Pokemon>(`/pokemon/${pokemon.name}`).then(poke => poke.data);
            })
        );
        return list;
    }),
    findByName: (name: string) => api.get<Pokemon>(`/pokemon/${name}`)

}