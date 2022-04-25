export interface arrayOrderInterface {
    imageUrl: string,
    name: string,
    price: number
    type: string,
    size: number
}
export interface layoutHistoryInterface {
    date: string,
    arrayOrder: arrayOrderInterface[]
}