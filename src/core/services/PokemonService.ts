import { PokemonApi } from '../../infraestructure/apis/PokemonApi';
import { PokemonDto } from '../dtos/pokemonDto';
import { PokemonFactory } from '../factories/PokemonFactory';

export const PokemonService = {

    async findByName(name: string): Promise<PokemonDto> {
        return PokemonApi.findByName(name).then(response => {
            return PokemonFactory.create(response.data);
        }).catch(error => {
            throw new error;
        });
    }

}