'use client';
import {Product} from "@/types/product";
import styles from "@/app/product/styles/product.module.css";
import {ShoppingBag} from "lucide-react";
import {useAppDispatch} from "@/lib/hooks";
import {addToCart} from "@/lib/features/cart/cartSlice";
import {Tooltip} from "@mui/material";
import {useRouter} from "next/navigation";

interface Props {
    product: Product
}

export default function ProductUI({ product }: Props) {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const onAddToCartHandler = () => {
        dispatch(addToCart(product));
    }

    return (
        <div className={''}>
            <div className={`w-65 h-70 relative ${styles.imgContainer} ${styles.card}`}>
                <img src={product.imgUrl} alt={product.title} className={'w-full h-full cursor-pointer'}
                     onClick={() => router.push(`/product/${product._id}`)}/>
                <div className={`flex flex-row right-5 top-5 absolute ${styles.addToCartBox}`}>
                    <Tooltip title={'AddToCart'}>
                        <ShoppingBag className={'cursor-pointer'} onClick={onAddToCartHandler}/>
                    </Tooltip>
                </div>
            </div>
            <p className={'uppercase'} >{product.title}</p>
            <p className={'text-sm'} >{product.price}&nbsp;Ks</p>
        </div>
    );
}