'use client'
import Image from "next/image";
import { formatCurrency } from "@/src/utils";
import AddProduct from "./AddProductButton";

type ProductCardProps = {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
        categoryId: number;
    }
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border bg-white rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
        <div className="p-5 flex gap-2 justify-between">
            <div>
              <h3 className="text-base font-bold line-clamp-1">{product.name}</h3>
              <p className="font-black text-xl text-amber-500">{formatCurrency(product.price)}</p>
              <AddProduct product={product} />
            </div>
            <Image 
              className="rounded-xl" 
              src={`/products/${product.image}.jpg`} 
              alt={`Imagen producto ${product.name}`} 
              width={100} 
              height={100}
            />
        </div>
    </div>
  )
}

export default ProductCard