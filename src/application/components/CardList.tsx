import { FC } from "react"
import { PokemonDto } from "../../core/dtos/pokemonDto"
import { PokemonCard } from "./PokemonCard";
import styled from "@emotion/styled";

interface CardListProps {
    pokemons: PokemonDto[]
}

export const CardList: FC<CardListProps> = ({ pokemons }) => {

    return(
        <List className="flex flex-wrap justify-around gap-8 ">
            { pokemons?.map(pokemon => (
                <PokemonCard key={ pokemon.id } title={ pokemon.name } image={ pokemon?.image || '' }  types={ pokemon.types }/>
            )) }
        </List>
    );

} 

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 45px;
`