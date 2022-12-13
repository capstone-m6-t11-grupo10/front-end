import { IPost } from "../IPost"
import { IUser } from "../IUser"

export interface IComent {
    uuid: string
    content: string
    postId: string
    userId: string
}
export interface IComentFull {
    uuid: string
    content: string
    post: IPost
    user: IUser
}
export interface IComentUser {
    uuid: string
    content: string
    postId: string
    user: IUser
}
export interface IComentPost {
    uuid: string
    content: string
    post: IPost
    userId: string
}

export interface ICommentsUser {
    uuid: string
    content: string
    postId: string
    user: IUser
}[]