import { FC, useEffect, useState } from "react";
import { PokemonService } from "../../core/services/PokemonService";
import { Card } from '../components/Card';
import { PokemonDto } from "../../core/dtos/pokemonDto";

export const PokemonListPage: FC = () => {
    const [pokemons, setPokemons] = useState<PokemonDto[]>([])

    useEffect(() => {
      const loanPokemons = async() => {
        const pokes = await PokemonService.getAll()
        setPokemons(pokes);
      }
      loanPokemons();
    }, [])
    
    const list = pokemons.map(pokemon => (
      <Card title={ pokemon?.name || 'No hay' } image={ pokemon?.image || 'No hay' } types={ pokemon?.types || [] } />
    ));

    return (
        <>
          { list.length > 0 ? list : (<p>No hay Pokémon disponibles</p> )}
        </>
    )
}

