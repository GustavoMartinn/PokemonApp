import { PokemonCard, PokemonCardProps } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'PokemonCard',
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>

const Template: ComponentStory<typeof PokemonCard> = (
  args: PokemonCardProps
) => <PokemonCard {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Bulbasaur',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  pokemonType: 'grass',
  pokemonId: '001',
}

export const Variant = Template.bind({})
Variant.args = {
  name: 'charmander',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
  pokemonType: 'fire',
  pokemonId: '004',
}
