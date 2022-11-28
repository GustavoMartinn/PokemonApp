import Link from 'next/link'
import { FC } from 'react'
import {
  PokemonCardButton,
  PokemonCardImage,
  PokemonCardHeader,
  PokemonCardFooter,
} from './styles'

export interface PokemonCardProps {
  name: string
  imageUrl: string
  pokemonType: PokemonTypes
  pokemonId: string
}

export const PokemonCard: FC<PokemonCardProps> = ({
  name,
  imageUrl,
  pokemonType,
  pokemonId,
  ...rest
}) => (
  <Link
    href={`/pokemon/${name.toLocaleLowerCase()}`}
    style={{ textDecoration: 'none', margin: 0, padding: 0 }}
  >
    <PokemonCardButton pokemonType={pokemonType} {...rest}>
      <PokemonCardHeader pokemonType={pokemonType}>
        <PokemonCardImage size="1.5" src="/pokeball.png" />
        No.{pokemonId}
      </PokemonCardHeader>
      <PokemonCardImage size="10" src={imageUrl} />
      <PokemonCardFooter>{name}</PokemonCardFooter>
    </PokemonCardButton>
  </Link>
)
