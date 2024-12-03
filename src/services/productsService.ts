import { prisma } from '@/src/lib/prisma';

class ProductsService {
    // Fetching get categories desde el servidor
    static async getProductByCategory(category: string) {
        const response = await prisma.product.findMany({
            where: {
                category: {
                    slug: category
                },
            },
        });
        
        return response;
    }
}

export default ProductsService;