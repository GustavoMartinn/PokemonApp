interface Pokemon {
  name: string
  id: number
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }
  moves: {
    move: {
      name: string
    }
  }[]
  abilities: {
    ability: {
      name: string
      url: string
    }
  }[]
  types: {
    type: {
      name: PokemonTypes
      url: string
    }
  }[]
  weight: number
  height: number
}

type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'
  | 'unknown'

interface ThemeType {
  backgroundColor: string
  textColor: string
  buttonBackgroundColor: string
  primaryHeaderColor: string
  secundaryHeaderColor: string
  borderRadius: {
    small: number
    medium: number
    large: number
  }
  spacing: {
    small: number
    medium: number
    large: number
  }
}

interface Ability {
  name: string
  effect_entries: {
    effect: string
    language: {
      name: string
    }
  }[]
}
