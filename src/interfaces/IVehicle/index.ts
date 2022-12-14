import { IPost } from "../IPost"

export interface IVehicle {
    uuid: string
    color: string
    type: string
    plate: string
    images: string[]
    password: string
    km: number
    year: string
    postId: string
    userId: string
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