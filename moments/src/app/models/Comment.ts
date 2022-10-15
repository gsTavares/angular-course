import { Moment } from "./Moment"

export interface Comment {
    id?: number,
    moment: Moment
    username: string,
    text: string,
    createdAt?: Date | string,
    updatedAt?: Date | string
}