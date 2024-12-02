import ProductsService from "@/app/services/productsService";
import ProductCard from "@/app/components/products/ProductCard";

// Params tiene mucha información, como el path, el query, etc.
const OrderPage = async ({ params }: { params: { category: string } }) => {
  const products = await ProductsService.getProductByCategory(params.category);

  return (
    <>
      <h1 className="text-2xl mb-10">Elige y personaliza tu pedido a continuacion</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default OrderPage;
