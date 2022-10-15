export interface Comment {
    id?: number,
    username: string,
    text: string,
    createdAt?: Date | string,
    updatedAt?: Date | string
}