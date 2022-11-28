import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
