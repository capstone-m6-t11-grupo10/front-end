import { IPost } from '../IPost'
import { IUser } from '../IUser'

export interface Image {
  id: string
  image: string
}

export interface IVehicle {
  id: string
  title: string
  description: string
  isActive: boolean
  price: string
  type: string
  images: Image[]
  km: number
  year: string
  user: IUser
}

export interface IVehicleLeilao {
  id: string
  title: string
  time: string
  description: string
  price: string
  image: string
  km: number
  year: string
  user: IUser
}

export interface IVehicleLeilaoProps {
  props: {
    id: string
    title: string
    time: string
    description: string
    price: string
    image: string
    km: number
    year: string
    user: IUser
  }
}

export interface IPropsVehicle {
  props: { vehicle: IVehicle; isOwnerSellerPerfil: boolean }
}

export interface IPropsVehicleIsActive {
  props: { isActive: boolean }
}

export interface IVehiclePosted {
  id: string
  color: string
  type: string
  plate: string
  images: string[]
  password: string
  km: number
  year: string
  post: IPost
  userId: string
}

export interface IVehicleCreated {
  description: string
  km: string
  price: string
  title: string
  year: string
  type: string
}

export interface IVehicleRequest {
  type: string
  images: string[]
  userId: string
  isActive: boolean
  title: string
  year: string
  km: string
  description: string
  price: string
}
