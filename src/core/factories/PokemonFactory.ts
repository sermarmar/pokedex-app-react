import { PokemonDto, Sprites } from '../dtos/pokemonDto';
import { Pokemon } from '../model/Pokemon';

export const PokemonFactory = {
    create(data: Pokemon): PokemonDto {
        const types = data.types.map((type) => {
            return type.type.name;
        });
        const image = data.sprites.other?.['official-artwork'].front_default;
        const imageSprites: Sprites = {
            back_default: data.sprites.back_default,
            front_default: data.sprites.front_default
        };

        return {
            id: data.id,
            name: data.name,
            types: types,
            image: image,
            imageSprites: imageSprites 
        };
    }
}