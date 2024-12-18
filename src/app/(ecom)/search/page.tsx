import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    return (
      <div className="justify-top flex min-h-screen flex-col items-center bg-gray-100 p-4">
        <div className="w-full max-w-4xl rounded-lg bg-white p-8 text-center shadow-md">
          <h1 className="font-semilight mb-3 text-center text-3xl">
            No products found for:{" "}
            <span className="font-extrabold text-blue-600">{query}</span>
          </h1>
          <p className="text-font-semibold text-center text-lg text-gray-600">
            Try searching with different keywords
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="justify-top flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <div className="gg-white w-full max-w-4xl rounded-lg p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          🤑Search results for {query}
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default SearchPage;
