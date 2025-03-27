export interface IProducts{
    id: number
    name: string
    description:string
    price: number
}

export type TProduct = Omit<IProducts,"id">

export type TUpdateProduct = Partial<IProducts>