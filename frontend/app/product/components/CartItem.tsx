import {Button, ButtonGroup} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {Product} from "@/types/product";

interface Props {
    product: Product,
    quantity: number,
    onDeleteItem: (product: Product) => void,
    onAddItem: (product: Product) => void,
}

export default function CartItem({ product, quantity, onDeleteItem, onAddItem }: Props) {

    return (
        <div className={'flex flex-col'}>
            <div className={"flex flex-row items-center justify-between"}>
                <div className={"w-20 h-20"}>
                    <img src={product.imgUrl} alt={product.title} className={"w-full h-full"}/>
                </div>
                <p className={'w-35 uppercase'} >{product.title}</p>
                <ButtonGroup >
                    <Button
                        variant={"text"}
                        aria-label="reduce"
                        onClick={() => onDeleteItem(product)}
                    >
                        <RemoveIcon fontSize="small"/>
                    </Button>
                    <p className={'text-center w-10'}>{quantity}</p>
                    <Button
                        variant={"text"}
                        aria-label="increase"
                        onClick={() => onAddItem(product)}
                    >
                        <AddIcon fontSize="small"/>
                    </Button>
                </ButtonGroup>
                <p>{product.price * quantity} Ks</p>
            </div>
        </div>
    );
}