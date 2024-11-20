import { FC } from "react"
import { PokemonDto } from "../../core/dtos/pokemonDto"
import { PokemonCard } from "./PokemonCard";

interface CardListProps {
    pokemons: PokemonDto[]
}

export const CardList: FC<CardListProps> = ({ pokemons }) => {

    return(
        <div className="flex flex-wrap justify-around gap-8 ">
            { pokemons?.map(pokemon => (
                <PokemonCard key={ pokemon.id } title={ pokemon.name } image={ pokemon?.image || '' }  types={ pokemon.types }/>
            )) }
        </div>
    );

} 