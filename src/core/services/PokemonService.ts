import { PokemonApi } from '../../infraestructure/apis/PokemonApi';
import { PokemonDto } from '../dtos/pokemonDto';
import { PokemonFactory } from '../factories/PokemonFactory';
import { Pokemon } from '../model/pokemon';

export const PokemonService = {
    
    async getAll(): Promise<PokemonDto[]>{
        return PokemonApi.getAll().then(async (response) => {
            /*return response.data.results.map(async (pokemon: Pokemon) => {
                return PokemonFactory.create(pokemon);
            }  */  
            return await Promise.all(
                response.data.results.map((pokemon: Pokemon) => {
                    return PokemonApi.findByName(pokemon.name).then(poke => PokemonFactory.create(poke.data));
                })
            );
        }).catch(error => {
            throw new error;
        });
    },
    async findByName(name: string): Promise<PokemonDto> {
        return PokemonApi.findByName(name).then(response => {
            return PokemonFactory.create(response.data);
        }).catch(error => {
            throw new error;
        });
    }

}