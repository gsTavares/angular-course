export interface Comment {
    id?: number,
    username: string,
    text: string,
    createdAt?: DateConstructor,
    updatedAt?: DateConstructor
}