import { FC, useEffect, useState } from "react";
import { PokemonService } from "../../core/services/PokemonService";
import { PokemonDto } from "../../core/dtos/pokemonDto";
import { CardList } from "../components/CardList";
import { TypeColorProvider } from "../providers/TypeColorProvider";

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
          <TypeColorProvider>
            <h1 className="text-5xl">Lista de pokemón</h1>
            <CardList pokemons={ pokemons } />
          </TypeColorProvider>
        </>
    )
}

