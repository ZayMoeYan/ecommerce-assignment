import type { Metadata } from "next";
import {redirect} from "next/navigation";

export default function IndexPage() {

    redirect('/product');
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
