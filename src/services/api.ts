import axios from 'axios'
import { Dispatch, SetStateAction } from 'react';
import { map, object, string } from 'zod';
import { IUser, IUserEdit } from '../interfaces/IUser';

const baseUrl = 'http://localhost:3000/'

const api = axios.create({
  baseURL: baseUrl,
  timeout: 15000
})


export const settingVehicles = async (setVehicles: Dispatch<SetStateAction<{ carros: never[]; motos: never[]; }>>) => {
  const response = await api.get("http://localhost:3000/vehicles").then((response) => {
    setVehicles(response.data)
  });
  return response
}

export const settingProfileView = async ({ setUserInfo, id }: any) => {
  const response = await api.get("http://localhost:3000/users/" + id).then((response) => {
    setUserInfo(response.data)
  });
  return response
}


interface IBodyEdit {
  [key: string]: any;
}
interface IBodyEditProps {
  data: IBodyEdit
  setUserInfo: Dispatch<SetStateAction<IUser>>
  id: string
}

export const edittingProfile = async (props: IBodyEditProps) => {
  const { data, setUserInfo, id } = props
  const values = Object.values(data)
  const keys = Object.keys(data)

  const body: IBodyEdit = {}

  keys.forEach((key: string, index) => {
    if (values[index] !== undefined && values[index] !== '') {
      body[key] = values[index]
    }
  })

  console.log(body)
  const response = await api.patch("http://localhost:3000/users/" + id, body).then((response) => {
    setUserInfo(response.data)
    console.log(response)
  });
}

export default api
