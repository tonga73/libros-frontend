import axios from "axios"

export const API_URL = import.meta.env.VITE_API_URL

const client = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default client
