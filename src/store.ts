import { create } from 'zustand';
import { OrderItem } from './types';
import { Product } from '@prisma/client';

interface Store {
    order: OrderItem[];
    addToCart: (product: Product) => void;
}

export const useStore = create<Store>((set) => ({
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

        // Set permite actualizar el estado
        set((state) => ({
            ...state,
            order: [...state.order, productInOrder],
        }))
    }
}));