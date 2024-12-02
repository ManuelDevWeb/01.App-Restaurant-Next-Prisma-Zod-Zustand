import { prisma } from '@/src/lib/prisma';

class CategoriesService {
    // Fetching get categories desde el servidor
    static async getCategories() {
        const response = await prisma.category.findMany();

        return response;
    }
}

export default CategoriesService;