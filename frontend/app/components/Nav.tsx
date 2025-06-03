"use client";

import { usePathname } from "next/navigation";
import NavMenu from "@/app/components/NavMenu";
import CartBagUI from "@/app/product/components/CartBagUI";
import {useAppSelector} from "@/lib/hooks";
import {selectTotalCountFromCart} from "@/lib/features/cart/cartSlice";
import {ShoppingBag} from "lucide-react";

export const Nav = () => {

  const pathname = usePathname();
  const totalCount = useAppSelector(selectTotalCountFromCart);


  return (
    <nav className={'flex flex-row shadow px-20 py-2 w-screen z-10 justify-between fixed mb-3 bg-white'}>
        <div className={'flex flex-row items-center w-60 justify-between'}>
            <div className={'w-10 h-10'}>
                <img
                    src="https://render.fineartamerica.com/images/rendered/default/poster/8/5/break/images/artworkimages/medium/2/vans-of-the-wall-melissa-r-sykes.jpg"
                    alt="navLogo"
                    className={'w-full h-full'}
                />
            </div>
            <NavMenu href={'/product'} label={'Home'}/>
            <NavMenu href={'/product'} label={'Products'}/>
        </div>
        <div className={'flex flex-row items-center'}>
            {
                totalCount !== 0 ?  <CartBagUI /> : <ShoppingBag/>
            }
        </div>
    </nav>
  );
};
