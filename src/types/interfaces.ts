export interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    photo: string;
}
export interface OrderState {
    cafeId: string | null;
    tableNumber: number | null;
    items: OrderItem[];

    loading: boolean;
    error: string | null;
}
