import apiClient from './axios'

interface AllPokemonsResponse {
  count: number
  results: Pokemon[]
}

export async function getAllPokemons(offset = 0) {
  return new Promise<AllPokemonsResponse>((resolve, reject) => {
    apiClient
      .get(`/pokemon?offset=${offset}&limit=10`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export async function getAllPokemonsByType(type: PokemonTypes, offset = 0) {
  return new Promise<AllPokemonsResponse>((resolve, reject) => {
    apiClient
      .get(`https://pokeapi.co/api/v2/${type}/grass`)
      .then((response) => {
        resolve(response.data.pokemon.slice(offset, offset + 10))
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getPokemon = async (pokemonName: string) => {
  return new Promise<Pokemon>((resolve, reject) => {
    apiClient
      .get(`/pokemon/${pokemonName}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const getAbility = async (abilityName: string) => {
  return new Promise<Ability>((resolve, reject) => {
    apiClient
      .get(`/ability/${abilityName}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
