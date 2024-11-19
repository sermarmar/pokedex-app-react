import { FC } from "react"
import { PokemonDto } from "../../core/dtos/pokemonDto"
import { Card } from "./Card";

interface CardListProps {
    pokemons: PokemonDto[]
}

export const CardList: FC<CardListProps> = ({ pokemons }) => {

    return(
        <>
            { pokemons?.map(pokemon => (
                <Card key={ pokemon.id } title={ pokemon.name } image={ pokemon?.image || '' }  types={ pokemon.types }/>
            )) }
        </>
    );

} 