import { ReactNode } from 'react'
import { string } from 'zod'

export interface IPropChildren {
  children: ReactNode
}

export interface IAddress {
  uuid: string
  country: string
  state: string
  city: string
  cep: string
  street: string
  number: string
  complement: string
  userId: string
}
export interface IAddresses {
  addresses: IAddress[]
}
