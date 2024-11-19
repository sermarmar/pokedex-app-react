import { FC, useEffect, useState } from "react";
import { PokemonService } from "../../core/services/PokemonService";
import { Card } from '../components/Card';
import { PokemonDto } from "../../core/dtos/pokemonDto";
import { CardList } from "../components/CardList";

export const PokemonListPage: FC = () => {
    const [pokemons, setPokemons] = useState<PokemonDto[]>([])

    useEffect(() => {
      const loanPokemons = async() => {
        const pokes = await PokemonService.getAll()
        console.log(pokes);
        setPokemons(pokes);
      }
      loanPokemons();
    }, []);

    return (
        <>
          <CardList pokemons={ pokemons } />
        </>
    )
}

