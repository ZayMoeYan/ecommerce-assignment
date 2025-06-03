import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {
    addToCart,
    deleteFromCart, removeAllFromCart,
    selectProductsFromCart, selectTotalCartPrice,
    selectTotalCountFromCart, selectTotalProductsFromCart
} from "@/lib/features/cart/cartSlice";
import {ChevronLeft, ShoppingBag} from "lucide-react";
import {Drawer, Box, Tooltip} from "@mui/material";
import {useState} from "react";

import {Product} from "@/types/product";
import CartItem from "@/app/product/components/CartItem";
import {redirect} from "next/navigation";
import styles from '../../styles/layout.module.css';


export default function CartBagUI() {

    const products = useAppSelector(selectProductsFromCart);
    const totalCount = useAppSelector(selectTotalCountFromCart);
    const totalProductsFromCart = useAppSelector(selectTotalProductsFromCart);
    const totalPrice = useAppSelector(selectTotalCartPrice);

    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const onDeleteFromCart = (product: Product) => {
        dispatch(deleteFromCart(product))
    }

    const onAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }

    const onRemoveAll = () => {
        dispatch(removeAllFromCart());
    }

    const onCheckout = () => {
        setOpen(false);
        redirect('/checkout')
    }

    return <>
        <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 550 }} role="presentation" >
                <div className={'flex flex-row mt-3'}>
                    <div className={`flex-row flex cursor-pointer ${styles.underlineBox}`} onClick={toggleDrawer(false)} >
                        <ChevronLeft/>
                        <div className={''} >
                            CONTINUE SHOPPING
                            <div></div>
                        </div>
                    </div>
                    <p className={'w-[65%] text-center text-xl font-bold mb-5'} >
                        { !totalCount ? 'There is no items in your cart' : 'Items in the cart'}
                    </p>
                </div>
                {
                    totalCount !== 0 && (
                        <>
                            <p className='text-end pe-3 underline hover:text-red-600
                            transition-colors duration-200 ease-in cursor-pointer' onClick={onRemoveAll} >
                                Remove All
                            </p>
                            <div className={'flex flex-col px-2 gap-3'} >
                                {
                                    products.map(product => (
                                        <CartItem key={product._id} product={product} onDeleteItem={onDeleteFromCart}
                                                  quantity={product.quantity} onAddItem={onAddToCart}/>
                                    ))
                                }
                            </div>
                            <hr className={'my-10 text-gray-500'} />
                            <div className={'flex flex-row justify-between items-center ps-60 pe-3'} >
                                <p className={'text-xl'} >Total</p>
                                <p>{totalCount}</p>
                                <p>{totalPrice} Ks</p>
                            </div>
                            <div className={'flex justify-center'} >
                                <button type={'button'}
                                        className='w-[90%] mt-10 py-2 border cursor-pointer
                                    transition-colors duration-400 ease-in-out
                                    hover:bg-black hover:text-white hover:border-black'
                                        onClick={onCheckout}
                                >
                                    Checkout
                                </button>
                            </div>
                        </>
                    )
                }
            </Box>
        </Drawer>
        <Tooltip title="Your Cart">
            <ShoppingBag onClick={toggleDrawer(true)}
                         className={"cursor-pointer"}/>
        </Tooltip>
        <p>{totalProductsFromCart !== 0 && totalProductsFromCart}</p>
    </>;
}