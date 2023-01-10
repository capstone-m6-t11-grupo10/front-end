import { IPost } from "../IPost"
import { IUser } from "../IUser"

export interface IComment {
    id: string
    comment: string
    dateCreated: string
    user: IUser
}
export interface IComent {
    id: string
    content: string
    postId: string
    userId: string
}
export interface IComentFull {
    id: string
    content: string
    post: IPost
    user: IUser
}
export interface IComentUser {
    id: string
    content: string
    postId: string
    user: IUser
}
export interface IComentPost {
    id: string
    content: string
    post: IPost
    userId: string
}

export interface ICommentsUser {
    id: string
    content: string
    postId: string
    user: IUser
}[]