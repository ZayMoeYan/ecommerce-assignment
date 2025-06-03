'use client';
import ProductList from "@/app/product/components/ProductList";
import type {Metadata} from "next";
import FeatureImages from "@/app/product/components/FeatureImages";
import Header from "@/app/product/components/Header";
import {useAppDispatch} from "@/lib/hooks";
import {useEffect} from "react";
import {resetCount} from "@/lib/features/counter/counterSlice";


export default function Page() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetCount());
    },[])

    return (
        <>
            <Header/>
            <FeatureImages/>
            <ProductList/>
        </>
    );
}