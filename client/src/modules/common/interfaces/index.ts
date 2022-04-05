export interface Pizzas {
    id: number,
    imageUrl: string,
    name: string,
    types: string[],
    sizes: number[],
    price: number,
    category?: string,
    rating?: number

}


export interface CartObjNew {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
    type: string,
    size: number,
    count: number
}
export interface CartObjNewWithIndex extends CartObjNew {
    index: number
}


export interface authDataIntrface {
    email: string,
    password: string
}
