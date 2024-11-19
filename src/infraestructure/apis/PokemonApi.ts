import axios from "axios"
import { Pokemon } from '../../core/model/pokemon';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const PokemonApi = {
    
    getAll: () => api.get('/pokemon'),
    findByName: (name: string) => api.get<Pokemon>(`/pokemon/${name}`)

}