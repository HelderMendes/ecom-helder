import ProductsView from "@/components/ProductsView";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //     `>>>> Rerendered the home page cache with ${products?.length} products and ${categories.lenght} categories`,
  // );

  return (
    <div>
      <h1>Test – Hello</h1>
      <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4 align-top">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
