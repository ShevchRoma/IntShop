

export enum StatusEnum {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface FurnitureState {
    furniture: IFurniture[],
    status: StatusEnum
}


export interface IFurniture {
    id: string,
    imageUrl: string,
    name: string,
    types: number[],
    sizes: number[],
    price: string,
    category: string,
    rating: number
}

export interface IFurnitureParams {
    category: string,
    sort: string,
    searchValue: string
}