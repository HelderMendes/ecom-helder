import { imageUrl } from "@/sanity/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "sanity.types";

function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  // console.log(product.description);

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md ${isOutOfStock ? "opacity-50" : ""}`}
    >
      <div className="relative aspect-square size-full overflow-hidden">
        {product.image && (
          <Image
            src={imageUrl(product.image).url()}
            alt={product.name || "Product image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false} // {false} | {true}
            className="object-cover"
          />
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-lg font-bold text-white">Out os Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-gray-800">
          {product.name}
        </h2>

        <p className="mt-2 line-clamp-2 font-semibold text-gray-600">
          {product.description
            ?.map((block) => {
              if ("children" in block && Array.isArray(block.children)) {
                return block.children.map((child) => child.text || "").join("");
              }
              return ""; // Handle blocks without children
            })
            .join(" ") || "Product description is not available!"}
        </p>

        {/* <p className="mt-2 font-semibold text-gray-600">
          {product.description
            ?.map((block) => {
              if (Array.isArray(block.children)) {
                return block.children.map((child) => child.text || "").join("");
              }
              return "";
            })
            .join(" ")
            .slice(0, 30) + " ..." || "Product description is not available!"}
        </p> */}
        <p className="mt-2 text-lg font-bold text-gray-900">
          € {product.price?.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default ProductThumb;
