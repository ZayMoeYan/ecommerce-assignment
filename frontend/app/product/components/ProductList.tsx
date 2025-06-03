'use client';
import {useGetAllProductsQuery} from "@/lib/features/product/productApiSlice";
import ProductUI from "@/app/product/components/ProductUI";
import {useAppDispatch} from "@/lib/hooks";
import {useEffect} from "react";
import {Simulate} from "react-dom/test-utils";
import {resetCount} from "@/lib/features/counter/counterSlice";

export default function ProductList() {

   const { data: products, isSuccess, isLoading } = useGetAllProductsQuery(undefined);

    return (
        <div className={'mt-10'}>
            {
                isLoading && <p>Loading...</p>
            }
            <div className={'flex flex-row w-300 gap-10 flex-wrap justify-between'} >
                {
                    isSuccess && products.map(product => <ProductUI key={product._id} product={product} />)
                }
            </div>
        </div>
    );
}