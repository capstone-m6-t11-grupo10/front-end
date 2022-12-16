import { IAddress } from "../IAddress"
import { IVehiclePosted } from "../IVehicle"

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