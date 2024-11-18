import axios from "axios"

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const PokemonApi = {
    
    getAll: () => api.get('/pokemon'),
    findByName: (name: string) => api.get(`/pokemon/${name}`)

}