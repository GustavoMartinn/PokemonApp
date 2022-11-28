import { useEffect, useState } from 'react'
import { getAllPokemons, getPokemon } from '../../../services/pokemonService'
import { Button } from '../../common/Button'
import { PokemonCard } from '../../common/PokemonCard'
import { PokedexContainer } from './styles'

export default function Pokedex() {
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    async function getPokemons() {
      const response = await getAllPokemons(page * 10)
      response.results.forEach((pokemon) => {
        getPokemon(pokemon.name).then((response) => {
          setPokemons((prevState) =>
            [...prevState, response]
              .filter(
                (value, index, self) =>
                  index ===
                  self.findIndex((element) => element.name === value.name)
              )
              .sort((a, b) => a.id - b.id)
          )
        })
      })
    }

    getPokemons()
  }, [page])

  function UpperCaseFirstChar(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <PokedexContainer>
      <PokedexContainer>
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={UpperCaseFirstChar(pokemon.name)}
              imageUrl={pokemon.sprites.other.home.front_default}
              pokemonType={pokemon.types[0].type.name}
              pokemonId={String(pokemon.id).padStart(3, '0')}
            />
          ))}
      </PokedexContainer>
      <Button onClick={() => setPage(page + 1)}>Load more</Button>
    </PokedexContainer>
  )
}
