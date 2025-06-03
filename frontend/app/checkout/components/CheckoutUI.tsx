'use client';
import {Alert, InputLabel, TextField} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {removeAllFromCart, selectProductsFromCart, selectTotalCartPrice} from "@/lib/features/cart/cartSlice";
import CheckoutOrders from "@/app/checkout/components/CheckoutOrders";
import {useState} from "react";
import styles from "@/app/styles/layout.module.css";
import {ChevronLeft} from "lucide-react";
import {redirect} from "next/navigation";

export default function CheckoutUI() {

    const totalPrice = useAppSelector(selectTotalCartPrice);
    const products = useAppSelector(selectProductsFromCart);
    const [alert, setAlert] = useState(false);
    const dispatch = useAppDispatch();

    const onPurchaseHandler = () => {
        setAlert(true);
        dispatch(removeAllFromCart());
    }


    return (
        <div className={'flex flex-row mt-20 w-screen px-30 justify-between'} >
            <div className={'w-[45%]'} >
                <div className={'flex flex-row justify-between items-center'} >
                    <p className={'text-2xl mb-10'} >Checkout</p>
                    <div className={`flex-row flex cursor-pointer ${styles.underlineBox}`}
                         onClick={() => redirect('/')}  >
                        <ChevronLeft/>
                        <div className={''} >
                            CONTINUE SHOPPING
                            <div></div>
                        </div>
                    </div>
                </div>
                <p className={'text-gray-500'} >SHIPPING DETAILS</p>
                <hr className={'my-2 text-gray-800'}/>
                <div className={'flex flex-row justify-between'} >
                    <p className={''}>Zay Moe yan</p>
                    <p className={''} >zaymoeyan21@gmail.com</p>
                </div>
                <p>Yangon</p>
                <p>Myanmar</p>
                <p className={'text-gray-500 mt-15'} >PAYMENT DETAILS</p>
                <hr className={'my-2 text-gray-800'}/>
                <form>
                    <div className={'mb-5'} >
                        <InputLabel htmlFor={'name'} className={'w-fit mb-2'} >NAME ON CARD</InputLabel>
                        <TextField fullWidth id={'name'}  label={'NAME ON CARD'} variant={'outlined'} />
                    </div>
                    <div className={'mb-5'} >
                        <InputLabel htmlFor={'cardNo'} className={'w-fit mb-2'} >CARD NUMBER</InputLabel>
                        <TextField fullWidth id={'cardNo'}  label={'CARD NUMBER'} variant={'outlined'} />
                    </div>
                    <div className={'flex flex-row justify-between'} >
                        <div className={'w-[45%]'} >
                            <InputLabel htmlFor={'validCode'} className={'w-fit mb-2'} >VALID THROUGH</InputLabel>
                            <TextField fullWidth id={'validCode'}  label={'VALID THROUGH'} variant={'outlined'} />
                        </div>
                        <div className={'w-[45%]'} >
                            <InputLabel htmlFor={'name'} className={'w-fit mb-2'} >CYC CODE</InputLabel>
                            <TextField fullWidth id={'name'}  label={'CYC CODE'} variant={'outlined'} />
                        </div>
                    </div>
                    <button type={'button'} className='w-full mt-10 py-2 border cursor-pointer transition-colors duration-400 ease-in-out
                        hover:bg-black hover:text-white hover:border-black'
                            onClick={onPurchaseHandler}
                        >
                        Purchase {totalPrice} Ks
                        </button>
                </form>
            </div>
            <div className={'w-[45%]'} >
                <p className={'text-gray-500 mt-17'} >YOUR ORDER</p>
                <hr className={'my-5 text-gray-800'}/>
                <div className={'flex flex-col gap-3'} >
                    {
                        products.map(product => <CheckoutOrders key={product._id} quantity={product.quantity} product={product} />)
                    }
                </div>
                <hr className={'my-5 text-gray-800'}/>
                <div className={'flex flex-row justify-between'} >
                    <p>SUBTOTAL</p>
                    <p>{totalPrice} Ks</p>
                </div>
                <div className={'flex flex-row justify-between'} >
                    <p>SHIPPING</p>
                    <p>0 Ks</p>
                </div>
                <div className={'flex flex-row justify-between'} >
                    <p>TOTAL</p>
                    <p>{totalPrice} Ks</p>
                </div>
                <hr className={'my-5 text-gray-800'}/>
                {
                    alert && (
                        <Alert variant="outlined" severity="success">
                            Successfully Purchased.
                        </Alert>
                    )
                }
            </div>
        </div>
    );
 }