'use client';
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { formatCurrency } from "@/src/utils";
import { useMemo } from "react";

const OrderSummary = () => {
  // Accediendo al Store
  const order = useStore(state => state.order);
  
  const total = useMemo(() => order.reduce((acc, item) => acc + item.subtotal, 0), [order])

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5 bg-gray-100 ">
        <h1 className="text-4xl text-center font-black">Mi pedido</h1>
        {order.length === 0 ? <p className="text-center my-10">El carrito esta vacio</p> : (
          <div className="mt-5">
            {order.map(item => (
              <ProductDetails key={item.id} item={item}/>
            ))}

            <p className="text-2xl mt-20 text-center">Total a pagar: {''}</p>
            <span className="font-bold">{formatCurrency(total)}</span>
          </div>
        )}
    </aside>
  )
}

export default OrderSummary;