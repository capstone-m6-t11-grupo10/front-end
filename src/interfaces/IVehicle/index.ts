import { IPost } from '../IPost'
import { IUser } from '../IUser'

export interface IVehicle {
  uuid: string
  title: string
  description: string
  isActive: boolean
  price: string
  type: string
  color: string
  plate: string
  images: { image: string, id: string }[]
  km: number
  year: string
  user: IUser
}

export interface IPropsVehicle {
  props: { vehicle: IVehicle; isOwnerSellerPerfil: boolean; }
}

export interface IPropsVehicleIsActive {
  props: { isActive: boolean }
}

export interface IVehiclePosted {
  uuid: string
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
