import axios from 'axios'
import { Dispatch, SetStateAction } from 'react';

const baseUrl = 'http://localhost:3000/'

const api = axios.create({
  baseURL: baseUrl,
  timeout: 15000
})


export const settingVehicles = async (setVehicles: any) => {
  const response = await api.get("http://localhost:3000/vehicles").then((response) => {
    setVehicles(response.data)
  });
  return response
}

export default api
