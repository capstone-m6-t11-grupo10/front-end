import { IAddress } from '../IAddress'
import { IVehiclePosted } from '../IVehicle'
import { Dispatch, SetStateAction } from 'react';


export interface IUser {
    uuid: string
    name: string
    birthDate: string
    image: string
    email: string
    phone: string
    password: string
    isActive: boolean
    addressId: string
    cpf: string
    isSeller: boolean
    bio: string
}
export interface IUserEdit {
    name: string
    birthDate: string
    email: string
    phone: string
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
    isSeller: boolean
}

export interface IBodyEdit {
    [key: string]: any;
}
export interface IBodyEditProps {
    data: IBodyEdit
    setUserInfo: Dispatch<SetStateAction<IUser>>
    id: string
}