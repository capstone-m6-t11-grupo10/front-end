import { ICommentsUser } from "../coments"
import { IUser } from "../IUser"
import { IVehicle } from "../IVehicle"

export interface IPost {
    uuid: string
    tittle: string
    description: string
    isActive: boolean
    image: string
    vehicleId: string
    userId: string
}
export interface IPostVehicled {
    uuid: string
    tittle: string
    description: string
    image: string
    vehicle: IVehicle
    isActive: boolean
    userId: string
}
export interface IPostFull {
    uuid: string
    tittle: string
    description: string
    image: string
    vehicle: IVehicle
    isActive: boolean
    user: IUser
    comments: ICommentsUser
}
