'use client';
import {useGetAllProductsQuery} from "@/lib/features/product/productApiSlice";
import {MouseEventHandler, useState} from "react";
import {Button, ButtonGroup} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {Product} from "@/types/product";
import {addToCart, deleteFromCart, selectProductsFromCart} from "@/lib/features/cart/cartSlice";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {get} from "immer/src/utils/common";
import styles from "@/app/styles/layout.module.css";
import {ChevronLeft} from "lucide-react";
import {useRouter} from "next/navigation";
import {decrement, increment, resetCount, selectCount} from "@/lib/features/counter/counterSlice";

interface Props {
    id: string
}

function getProduct(data: Product[], products: Product[], id: string): Product {
    let item = data?.find(prod => prod._id === id);
    products.map(prod => {
        if (prod._id === item?._id) {
            item = prod;
        }
    })
    return item!;
}

export default function ProductDetail({ id }: Props) {

    const [size, setSize] = useState(0);
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProductsFromCart);
    const count = useAppSelector(selectCount);
    const router = useRouter();

    const { product } = useGetAllProductsQuery(undefined, {
        selectFromResult: ({ data }) => ({
            product: getProduct(data!, products, id)
        })
    });

    const onSelectSizeHandler = (event: any) => {}

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

    const onAddToCart = () => {
        const productToCart = {
            ...product,
            quantity: product?.quantity ? product?.quantity+count : count,
        }
        dispatch(resetCount());
        dispatch(addToCart(productToCart));
    }

    return (
        <>
            <div className={`flex-row text-start w-screen px-10 flex cursor-pointer mt-20 mb-5 ${styles.underlineBox}`} onClick={() => router.push('/')} >
                <ChevronLeft/>
                <div className={''} >
                    CONTINUE SHOPPING
                    <div></div>
                </div>
            </div>
            <div className={'flex flex-row w-screen justify-between px-10'} >

                <div className={'w-[50%] h-150'} >
                    <img src={product?.imgUrl} alt={product?.title} className={'w-full h-full'}/>
                </div>
                <div className={'w-[40%] flex flex-col gap-3'} >
                    <p className={'uppercase text-xl font-bold'} >{product?.title}</p>
                    <p className={'uppercase'} >{product?.category.title}</p>
                    <p className={'font-bold'} >Infinite Support Total Control</p>
                    <p>
                        Vans is the original skate fashion icon. From skate shoes to checkerboard patterns to snowboard boots,
                        get streetwear that's truly Off the Wall.
                    </p>
                    <p className={'mt-5'} >Select Size</p>
                    <div className={'flex flex-row justify-between w-80 mb-5'} >
                        <input className={'border px-4 py-1 w-12 cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out'}
                               value={7} readOnly
                               onClick={onSelectSizeHandler}
                        />
                        <input className={'border px-4 py-1 w-12 cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out'}
                               value={8} readOnly
                               onClick={onSelectSizeHandler}
                        />
                        <input className={'border px-4 py-1 w-12 cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out'}
                               value={9} readOnly
                               onClick={onSelectSizeHandler}
                        />
                        <input className={'border px-4 py-1 w-13 cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out'}
                               value={10} readOnly
                               onClick={onSelectSizeHandler}
                        />
                        <input className={'border px-4 py-1 w-12 cursor-pointer hover:bg-gray-100 transition-colors duration-300 ease-in-out'}
                               value={11} readOnly
                               onClick={onSelectSizeHandler}
                        />
                    </div>
                    <ButtonGroup >
                        <Button
                            variant={"text"}
                            aria-label="reduce"
                            onClick={onDecrement}
                        >
                            <RemoveIcon fontSize="small"/>
                        </Button>
                        <p className={'text-center w-10'}>{count}</p>
                        <Button
                            variant={"text"}
                            aria-label="increase"
                            onClick={onIncrement}
                        >
                            <AddIcon fontSize="small"/>
                        </Button>
                    </ButtonGroup>
                    <button type={'button'} className='w-full mt-10 py-2 border cursor-pointer transition-colors duration-400 ease-in-out
                        hover:bg-black hover:text-white hover:border-black'
                            onClick={onAddToCart}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    );
}