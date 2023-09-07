

export interface CartItem {
    id: string;
    imageUrl: string;
    name: string;
    type: number;
    size: number;
    count: number;
    price: number;
}

export interface CartState {
    items: CartItem[]
    totalPrice: number
}