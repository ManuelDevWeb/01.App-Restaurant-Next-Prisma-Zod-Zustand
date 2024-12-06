"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { formatCurrency } from "@/src/utils";
import React, { useMemo } from "react";
import { createOrderAction } from "@/actions/create-order-action";

const OrderSummary = () => {
  // Accediendo al Store
  const order = useStore((state) => state.order);

  const total = useMemo(
    () => order.reduce((acc, item) => acc + item.subtotal, 0),
    [order]
  );

  const handleCreateOrder = (formData: FormData) => {
    console.log(formData.get("name"));
    // Llamando el action (Funcion asincrona que se ejecuta en el servidor)
    createOrderAction(); 
  }

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5 bg-gray-100 ">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>
      {order.length === 0 ? (
        <p className="text-center my-10">El carrito esta vacio</p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}

          <p className="text-2xl mt-20 text-center">
            Total a pagar: {""}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>

          <form 
            className="w-full mt-10 space-y-5"
            action={handleCreateOrder}
          >
            <input 
              type="text"
              placeholder="Tu Nombre"
              className="bg-white border border-gray-100 p-2 w-full"
              name="name"
            />
            <input
              type="submit"
              className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
              value='Confirmar pedido'
            />
          </form>
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;
