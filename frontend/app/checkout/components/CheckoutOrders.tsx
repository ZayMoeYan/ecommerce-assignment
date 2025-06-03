import {Product} from "@/types/product";

interface Props {
    product: Product,
    quantity: number,
}

export default function CheckoutOrders({ product, quantity }: Props) {
    return (
        <div className={'flex flex-row items-center justify-between'} >
            <div className={'w-15 h-15'}>
                <img src={product.imgUrl} alt={product.title} className={'w-full h-full'}/>
            </div>
            <p className={'w-50'} >{product.title}</p>
            <p className={'border px-3'} >{quantity}</p>
            <p>{product.price} Ks</p>
        </div>
    );
}