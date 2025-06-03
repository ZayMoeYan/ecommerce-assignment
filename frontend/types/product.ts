export interface Category {
    _id?: string,
    title: string,
}

export interface Product {
    _id?: string,
    quantity?: number,
    category: Category,
    title: string,
    price: number,
    description: string,
    imgUrl: string,
}