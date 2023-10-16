import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-food-explorer-yf5j.onrender.com'
})