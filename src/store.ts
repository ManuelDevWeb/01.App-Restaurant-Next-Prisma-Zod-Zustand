import { create } from 'zustand';
import { OrderItem } from './types';
import { Product } from '@prisma/client';

interface Store {
    order: OrderItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: Product['id']) => void;
    increaseQuantity: (productId: Product['id']) => void;
    decreaseQuantity: (productId: Product['id']) => void;
}

export const useStore = create<Store>((set, get) => ({
    // Initial state
    order: [],
    addToCart: (product) => {
        const productInOrder = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            subtotal: product.price * 1,
        }

        // Con get puedes acceder al estado actual
        const currentOrder = get().order;

        let order : OrderItem[] = [];

        if(currentOrder.find((item)=>item.id === productInOrder.id)){
            order = currentOrder.map((item) => item.id === productInOrder.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1),                
            } : item)
        }else{            
            order = [...currentOrder, productInOrder]
        }

        // Set permite actualizar el estado
        set((state) => ({ 
            ...state,
            order: order
         }))
    },
    removeFromCart: (productId) => {
        const currentOrder = get().order;

        const order = currentOrder.filter((item) => item.id !== productId);

        set((state) => ({
            ...state,
            order: order
        }))
    },
    increaseQuantity(productId) {
        const currentOrder = get().order;

        const order = currentOrder.map((item) => item.id === productId ? {
            ...item,
            quantity: item.quantity + 1,
            subtotal: item.price * (item.quantity + 1),
        } : item);

        set((state) => ({
            ...state,
            order: order
        }));
        
    },
    decreaseQuantity(productId) {
        const currentOrder = get().order;

        const order = currentOrder.map((item) => item.id === productId ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1),
        } : item);

        set((state) => ({
            ...state,
            order: order
        }));
    },
}));