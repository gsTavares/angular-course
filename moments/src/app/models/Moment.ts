export interface Moment {
    id?: number,
    title: string,
    description: string,
    image: string,
    createdAt?: DateConstructor,
    updatedAt?: DateConstructor,
    comments?: Comment[]
}