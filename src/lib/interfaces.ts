export interface IUser {
    name: string
    phone: string
    email: string
    address?: string
    role?: string
}
export interface IProduct {
    id: number
    name: string
    ingredients: string
    image: string
    count: number
    price: number
}
export interface ICartItem extends IProduct {
    id: number
    name: string
    ingredients: string
    image: string
    count: number
    price: number
}
export interface IServerResponse<T> {
    pizzas: T[]
    sushi: T[]
}
export interface IOrder {
    id?: number
    user: IUser
    cart: ICartItem[]
    totalPrice: number
    timeStamp: number
}