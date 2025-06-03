import {Product} from "@/types/product";
import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction, ReducerCreators} from "@reduxjs/toolkit";

type CartProduct = Product & { quantity: number }

export type CartSliceState = {
    products: CartProduct[],
    status: 'loading' | 'completed' | 'rejected'
}

const initialState: CartSliceState = {
    products: [],
    status: 'loading'
}

export const cartSlice = createAppSlice({
    name: 'cart',
    initialState,
    reducers: (create: ReducerCreators<CartSliceState>) => ({
        addToCart: create.reducer((state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if(existingProduct) {
               existingProduct.quantity += 1;
            }else {
                state.products.push({...action.payload, quantity: action.payload.quantity ? action.payload.quantity : 1});
            }
        }),
        deleteFromCart: create.reducer((state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find(product => product._id === action.payload._id);
            if(existingProduct) {
                if(existingProduct.quantity !== 0) {
                    existingProduct.quantity -= 1;
                }
            }else {
                state.products = state.products.filter(product => product._id !== action.payload._id);
            }
        }),
        removeAllFromCart: create.reducer((state, action) => {
            state.products = [];
        })
    }),
    selectors: {
        selectProductsFromCart: (state: CartSliceState) =>
            state.products.filter(product => product.quantity !== 0),
        selectTotalCountFromCart: (state: CartSliceState) =>
            state.products.reduce((total, product) => total += product.quantity , 0),
        selectTotalCartPrice: (state: CartSliceState) =>
            state.products.reduce((total, product) => total += product.price * product.quantity, 0),
        selectTotalProductsFromCart: (state) => state.products.length
    }
})

export const { addToCart, deleteFromCart, removeAllFromCart} = cartSlice.actions;
export const {
    selectProductsFromCart,
    selectTotalCountFromCart,
    selectTotalCartPrice,
    selectTotalProductsFromCart
     } = cartSlice.selectors;