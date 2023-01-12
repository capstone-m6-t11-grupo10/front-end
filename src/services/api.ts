import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { map, object, string } from 'zod'
import { IComment } from '../interfaces/coments'
import {
  IBodyEdit,
  IBodyEditProps,
  IUser,
  IUserEdit
} from '../interfaces/IUser'
import { IPayload } from '../interfaces/payload'
import jwt_decode from 'jwt-decode'
import { IVehicle, IVehicleCreation, IVehicleState } from '../interfaces/IVehicle';

const baseUrl = 'http://localhost:3000/'

const api = axios.create({
  baseURL: baseUrl,
  timeout: 15000
})


export const settingVehicles = async (setVehicles: Dispatch<SetStateAction<IVehicleState>>) => {
  const response = await api.get("http://localhost:3000/vehicles").then((response) => {
    setVehicles(response.data)
    console.log(response)

  });
  return response
}

export const settingProfileView = async ({ setUserInfo, id }: any) => {
  console.log(id)
  const response = await api
    .get('http://localhost:3000/users/' + id)
    .then(response => {
      setUserInfo(response.data)
    })
  return response
}

export const edittingProfile = async (props: IBodyEditProps) => {
  const { data, setUserInfo, id, onClose } = props
  const values = Object.values(data)
  const keys = Object.keys(data)

  const body: IBodyEdit = {}

  keys.forEach((key: string, index) => {
    if (values[index] !== undefined && values[index] !== '') {
      body[key] = values[index]
    }
  })

  await api.patch('http://localhost:3000/users/' + id, body).then(response => {
    setUserInfo(response.data)
    onClose()
  })
}
interface IPostingVehicle {
  data: IVehicleCreation
  onclose: () => void
  vehicles: IVehicleState
  setVehicles: Dispatch<SetStateAction<IVehicleState>>
}


interface IPostingVehicle {
  data: IVehicleCreation
  onclose: () => void
  vehicles: IVehicleState
  setVehicles: Dispatch<SetStateAction<IVehicleState>>
}

export const postingVehicle = async (data: IVehicleCreation, vehicles: IVehicleState, setVehicles: Dispatch<SetStateAction<IVehicleState>>, onClose: () => void) => {
  const tokenUser: string = localStorage.getItem('tokenUser') || ''
  const header = {
    headers: {
      Authorization: `Bearer ${tokenUser}`,
    },
  }

  const currentPayload: IPayload = jwt_decode(tokenUser!)
  const id = currentPayload.id

  const response = await api.post(`http://localhost:3000/vehicles/${id}`, data, header).then((response) => {
    console.log(response.data)

    const currentVehicles = vehicles
    const newVehicle = response.data
    if (newVehicle.type === 'carro') {
      currentVehicles.carros = [...currentVehicles.carros, newVehicle]
    } else { currentVehicles.motos = [...currentVehicles.motos, newVehicle] }

    // setVehicles(currentVehicles)
    // console.log(currentVehicles)

    onClose
  });
}

export const postingComment = async (text: string, idVehicle: string) => {
  const tokenUser: string = localStorage.getItem('tokenUser') || ''
  const header = {
    headers: {
      Authorization: `Bearer ${tokenUser}`
    }
  }

  const response = await api.post(
    `http://localhost:3000/comments/${idVehicle}`,
    { comment: text },
    header
  )
  return response
}

export const settingUser = async (setUser: Dispatch<SetStateAction<IUser>>) => {
  const tokenUser = localStorage.getItem('tokenUser')

  const header = {
    headers: {
      Authorization: `Bearer ${tokenUser}`
    }
  }
  const currentPayload: IPayload = jwt_decode(tokenUser!)
  // console.log(currentPayload)
  const id = currentPayload?.id

  await api
    .get(`http://localhost:3000/users/${id}`, header)
    .then(res => setUser(res.data))
}

export interface IGettingCommentsProps {
  id: string
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>
}
export const gettingComments = async ({
  id,
  setComments
}: IGettingCommentsProps) => {
  const response = await api.get(`http://localhost:3000/comments/${id}`)
  setComments(response.data)
}

export default api
