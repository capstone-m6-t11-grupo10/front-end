import axios from 'axios'

const baseUrl = ''

const api = axios.create({
  baseURL: baseUrl,
  timeout: 15000
})

export default api
