import styles from "@/app/styles/layout.module.css";

export default function Footer() {
    return (
        <section>
            <div className="flex flex-row flex-wrap px-30 justify-between">
                <div className={`flex flex-col h-40 justify-between ${styles.underlineBox}`}>
                    <p className="text-gray-500 mb-1">COMPANY</p>
                    <div className="text-sm font-light w-max cursor-pointer">
                        About Us
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Contact
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Store Locations
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Careers
                        <div></div>
                    </div>
                </div>
                <div className={`flex flex-col h-50 justify-between ${styles.underlineBox}`}>
                    <p className="text-gray-500 mb-1">
                        HELP
                    </p>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Order Tracking
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        FAQ's
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Delivery Policy
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Privacy Policy
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Return & Exchange Policy
                        <div></div>
                    </div>
                </div>
                <div className={`flex flex-col h-50 justify-between ${styles.underlineBox}`}>
                    <p className="text-gray-500 mb-1">
                        Store
                    </p>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Topwear
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Outerwear
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Pants
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Shoes
                        <div></div>
                    </div>
                    <div className="text-sm font-light w-max cursor-pointer">
                        Accessories
                        <div></div>
                    </div>
                </div>
                <div className={`flex flex-col h-25 justify-between w-58`}>
                    <p className="text-gray-500">Follow Us</p>
                    <p className="text-sm font-light text-gray-500">Keep up-to-date with our latest things by following
                        us on our social media channels</p>
                </div>
            </div>
            <p className={'text-center mt-10'}>Copyright &copy; Zay Moe Yan</p>
        </section>
    );
}