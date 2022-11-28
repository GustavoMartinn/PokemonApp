import { ButtonHTMLAttributes, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

interface PokemonCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pokemonType: PokemonTypes
}

interface PokemonImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: string
}

export const PokemonCardButton = styled.button<PokemonCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  height: 15vw;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  padding: 0;
  cursor: pointer;
  background-color: ${({ pokemonType }) =>
    pokemonType === 'normal'
      ? '#A8A878A0'
      : pokemonType === 'fire'
      ? '#F08030A0'
      : pokemonType === 'water'
      ? '#6890F0A0'
      : pokemonType === 'electric'
      ? '#F8A030A0'
      : pokemonType === 'grass'
      ? '#78C850A0'
      : pokemonType === 'ice'
      ? '#98D8D8A0'
      : pokemonType === 'fighting'
      ? '#C03028A0'
      : pokemonType === 'poison'
      ? '#A040A0A0'
      : pokemonType === 'ground'
      ? '#E0C068A0'
      : pokemonType === 'flying'
      ? '#A890F0A0'
      : pokemonType === 'psychic'
      ? '#F85888A0'
      : pokemonType === 'bug'
      ? '#A8B820A0'
      : pokemonType === 'rock'
      ? '#B8A038A0'
      : pokemonType === 'ghost'
      ? '#705898A0'
      : pokemonType === 'dragon'
      ? '#7038F8A0'
      : pokemonType === 'dark'
      ? '#705848A0'
      : pokemonType === 'steel'
      ? '#B8B8A0A0'
      : pokemonType === 'fairy'
      ? '#EE99ACA0'
      : '#fff'};
  margin: ${({ theme }) => theme.spacing.medium}px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export const PokemonCardImage = styled.img<PokemonImageProps>`
  width: ${({ size }) => size}vw;
  width: ${({ size }) => size}vw;
`

export const PokemonCardHeader = styled.div<PokemonCardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px
    ${({ theme }) => theme.borderRadius.medium}px 0 0;
  background-color: ${({ pokemonType }) =>
    pokemonType === 'normal'
      ? '#A8A878'
      : pokemonType === 'fire'
      ? '#F08030'
      : pokemonType === 'water'
      ? '#6890F0'
      : pokemonType === 'electric'
      ? '#F8A030'
      : pokemonType === 'grass'
      ? '#78C850'
      : pokemonType === 'ice'
      ? '#98D8D8'
      : pokemonType === 'fighting'
      ? '#C03028'
      : pokemonType === 'poison'
      ? '#A040A0'
      : pokemonType === 'ground'
      ? '#E0C068'
      : pokemonType === 'flying'
      ? '#A890F0'
      : pokemonType === 'psychic'
      ? '#F85888'
      : pokemonType === 'bug'
      ? '#A8B820'
      : pokemonType === 'rock'
      ? '#B8A038'
      : pokemonType === 'ghost'
      ? '#705898'
      : pokemonType === 'dragon'
      ? '#7038F8'
      : pokemonType === 'dark'
      ? '#705848'
      : pokemonType === 'steel'
      ? '#B8B8A0'
      : pokemonType === 'fairy'
      ? '#EE99AC'
      : '#fff'};
  width: calc(100% - 24px);
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`

export const PokemonCardFooter = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  padding: 8px 0;
`
