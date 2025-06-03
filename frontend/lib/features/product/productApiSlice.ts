import {Product} from "@/types/product";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "@/config";


type ProductResponse = Product[];

export const productApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + '/api',
    }),
    reducerPath: 'productsApi',
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getAllProducts: build.query<ProductResponse, void>({
            query: () => ({
                url: '/product',
                method: 'GET'
            }),
            transformResponse: (response: { products: ProductResponse }) => {
                return response.products;
            },
            providesTags: () => [{ type: 'Products'}]
        }),
        saveProduct: build.mutation<Product, Product>({
            query: (productToSave: Product) => ({
                url: '/product',
                method: 'POST',
                body: productToSave
            }),
            async onQueryStarted(productToSave: Product, { dispatch, queryFulfilled }) {
                try{
                    const { data: savedProduct } = await queryFulfilled;
                    dispatch(
                        productApiSlice.util.updateQueryData('getAllProducts', undefined, (draft) => {
                            draft.push(savedProduct);
                            return draft;
                        })
                    )
                }catch{}
            }
        })
    })
})

export const { useGetAllProductsQuery, useSaveProductMutation } = productApiSlice;