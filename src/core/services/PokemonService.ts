import { PokemonApi } from '../../infraestructure/apis/PokemonApi';
import { PokemonDto } from '../dtos/pokemonDto';
import { PokemonFactory } from '../factories/PokemonFactory';
import { Pokemon } from '../model/pokemon';

export const PokemonService = {
    
    async getAll(): Promise<PokemonDto[]>{
        return PokemonApi.getAll().then((response) => {
            return response.map((pokemon: Pokemon) => {
                return PokemonFactory.create(pokemon);
            }    
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