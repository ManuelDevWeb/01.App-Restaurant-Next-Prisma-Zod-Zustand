'use client';

import { useStore } from "@/src/store";

type AddProductButtonProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    categoryId: number;
  }
}

const AddProductButton = ({product}: AddProductButtonProps) => {
  // Accediendo al Store
  const addToCart = useStore(state => state.addToCart);

  return (
    <button
      type="button"
      className="bg-indigo-600 hover:bg-indigo-800 text-white w-28 mt-5 p-1 rounded-full"
      onClick={() => addToCart(product)}
    >
      Agregar
    </button>
  );
};

export default AddProductButton;
