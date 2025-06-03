import ProductDetail from "@/app/product/[id]/components/ProductDetail";
import React from "react";

interface Props {
    params: Promise<{id: string}>
}

export default function Page({ params }: Props) {

    const {id} = React.use(params);

    return (
        <ProductDetail id={id}/>
    );
}