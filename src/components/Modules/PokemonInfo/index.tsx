import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useToggle } from '../../../hooks/useToogle'
import { getAbility, getPokemon } from '../../../services/pokemonService'
import { Popup } from '../../common/Popup'
import {
  Container,
  PokemonAbility,
  PokemonInfoBody,
  PokemonInfoHeader,
  PokemonInfoText,
  PokemonMove,
  PokemonMovesButton,
  PokemonMovesContainer,
  PokemonMovesHeader,
  PokemonTypeInfo,
} from './styles'

export default function PokemonInfo() {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([])
  const [renderMoves, toogleRenderMoves] = useToggle()
  const router = useRouter()
  const { pokemonName } = router.query

  useEffect(() => {
    async function getPokemonInfo() {
      if (pokemonName && typeof pokemonName === 'string') {
        const response = await getPokemon(pokemonName)
        response.abilities.forEach((ability) => {
          getAbility(ability.ability.name).then((response) => {
            setPokemonAbilities((prevState) =>
              [...prevState, response].filter(
                (value, index, self) =>
                  index ===
                  self.findIndex((element) => element.name === value.name)
              )
            )
          })
        })
        setPokemon(response)
      }
    }

    getPokemonInfo()
  }, [pokemonName])

  function UpperCaseFirstChar(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <>
      {pokemon && (
        <Container>
          <PokemonInfoHeader>
            <PokemonInfoText size={40} weight={600}>
              No. {String(pokemon.id).padStart(3, '0')}
            </PokemonInfoText>
            <PokemonInfoText size={40} weight={600}>
              {UpperCaseFirstChar(pokemon.name)}
            </PokemonInfoText>
            <PokemonInfoText size={40} weight={600}>
              {UpperCaseFirstChar(pokemon.types[0].type.name)} pokemon
            </PokemonInfoText>
          </PokemonInfoHeader>
          <PokemonInfoBody>
            <Image
              width={300}
              height={300}
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
            />
            <Popup
              left={19}
              top={75}
              text={`${pokemon.height / 10} m `}
              title="Height"
            />
            <Popup
              left={19}
              top={175}
              text={`${pokemon.weight / 10} Kg `}
              title="Weight"
            />
            {pokemon.types.map(({ type }, index) => (
              <PokemonTypeInfo
                key={type.name}
                type={type.name}
                right={50}
                top={(index + 1) * 50}
              >
                <PokemonInfoText size={20} weight={600}>
                  {UpperCaseFirstChar(type.name)}
                </PokemonInfoText>
              </PokemonTypeInfo>
            ))}
            <PokemonMovesHeader>
              <PokemonMovesButton
                selected={renderMoves}
                onClick={toogleRenderMoves}
              >
                Moves
              </PokemonMovesButton>
              <PokemonMovesButton
                selected={!renderMoves}
                onClick={toogleRenderMoves}
              >
                Abilities
              </PokemonMovesButton>
            </PokemonMovesHeader>
            <PokemonMovesContainer>
              {renderMoves
                ? pokemon.moves.map(({ move }) => (
                    <PokemonMove key={move.name}>
                      {UpperCaseFirstChar(move.name).replace('-', ' ')}
                    </PokemonMove>
                  ))
                : pokemonAbilities.map((ability) => (
                    <PokemonAbility title="" key={ability.name}>
                      {UpperCaseFirstChar(ability.name).replace('-', ' ')}
                      <span>
                        {ability.effect_entries.map((value, index) => {
                          if (value.language.name === 'en') {
                            return (
                              <PokemonInfoText
                                key={index}
                                size={15}
                                weight={400}
                              >
                                {value.effect}
                              </PokemonInfoText>
                            )
                          }
                        })}
                      </span>
                    </PokemonAbility>
                  ))}
            </PokemonMovesContainer>
          </PokemonInfoBody>
        </Container>
      )}
    </>
  )
}
