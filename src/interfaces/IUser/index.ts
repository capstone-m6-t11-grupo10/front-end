import { IAddress } from '../IAddress'
import { IVehiclePosted } from '../IVehicle'

export interface IUser {
  uuid: string
  name: string
  birthDate: string
  image: string
  phoneNumber: string
  password: string
  isActive: boolean
  addressId: string
  cpf: string
  isSeller: boolean
  bio: string
}
export interface IUserAddressed {
  uuid: string
  name: string
  birthDate: string
  image: string
  phoneNumber: string
  password: string
  isActive: string
  address: IAddress
  cpf: string
  isSeller: boolean
  bio: string
}

export interface IUserProps {
  props: {
    user: IUserAddressed
  }
}
export interface IPropsUserVehicles {
  props: {
    user: IUserAddressed
    vehicles: IVehiclePosted[]
  }
}

export interface ICreateUser {
  name: string
  email: string
  cpf: string
  phone: string
  birthDate: string
  bio: string
  cep: string
  state: string
  city: string
  street: string
  number: string
  complement: string
  password: string
  passwordConfirm: string
}
