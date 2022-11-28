import styled from 'styled-components'

interface TypeInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  type: PokemonTypes
  right: number
  top: number
}

interface MovesButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean
}

interface TextProps {
  size?: number
  weight?: number
  color?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const PokemonInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.quaternaryHeaderColor};
`

export const PokemonInfoBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 150px);
  padding: 0 20px;
  background-image: radial-gradient(
    circle,
    #cdcdcd,
    ${({ theme }) => theme.quaternaryHeaderColor}
  );
`

export const PokemonTypeInfo = styled.div<TypeInfoProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  width: 100px;
  height: 32px;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  background: linear-gradient(
    120deg,
    ${({ type }) =>
        type === 'normal'
          ? '#A8A878'
          : type === 'fire'
          ? '#F08030'
          : type === 'water'
          ? '#6890F0'
          : type === 'electric'
          ? '#F8A030'
          : type === 'grass'
          ? '#78C850'
          : type === 'ice'
          ? '#98D8D8'
          : type === 'fighting'
          ? '#C03028'
          : type === 'poison'
          ? '#A040A0'
          : type === 'ground'
          ? '#E0C068'
          : type === 'flying'
          ? '#A890F0'
          : type === 'psychic'
          ? '#F85888'
          : type === 'bug'
          ? '#A8B820'
          : type === 'rock'
          ? '#B8A038'
          : type === 'ghost'
          ? '#705898'
          : type === 'dragon'
          ? '#7038F8'
          : type === 'dark'
          ? '#705848'
          : type === 'steel'
          ? '#B8B8A0'
          : type === 'fairy'
          ? '#EE99AC'
          : '#fff'}
      30%,
    ${({ theme }) => theme.tertiaryHeaderColor} 30%
  );
  border: 1px solid #000;
`

export const PokemonMovesHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  /* border-bottom: 1px solid ${({ theme }) => theme.textColor}; */
  background-color: ${({ theme }) => theme.secondaryHeaderColor};
`

export const PokemonMovesButton = styled.div<MovesButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 75%;
  margin: 0 10px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.quaternaryHeaderColor : theme.buttonBackgroundColor};
  border: none;
  /* ${({ theme, selected }) =>
    selected &&
    `
  border-top: 1px solid ${theme.textColor};
  border-right: 1px double ${theme.textColor};
  border-left: 1px double ${theme.textColor};
  `} */
  border-radius: 8px 8px 0 0;
  cursor: pointer;
`

export const PokemonMovesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-top: 10px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.quaternaryHeaderColor};

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 20px;
  }
`

export const PokemonMove = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8vw;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  /* border: 1px solid ${({ theme }) => theme.textColor}; */
  background-color: ${({ theme }) => theme.tertiaryHeaderColor};
`

export const PokemonAbility = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8vw;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  /* border: 1px solid ${({ theme }) => theme.textColor}; */
  background-color: ${({ theme }) => theme.tertiaryHeaderColor};

  &:hover span {
    visibility: visible;
  }

  span {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    width: 200px;
    color: ${({ theme }) => theme.textColor};
    font-size: 12px;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
    top: 25px;
    left: 0%;
  }
`

export const PokemonInfoText = styled.p<TextProps>`
  text-align: center;
  font-size: ${({ size }) => (size ? size : 20)}px;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  color: ${({ theme }) => theme.textColor};
`
