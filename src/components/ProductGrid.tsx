"use client";

import { Product } from "sanity.types";
// import { AnimatePresence, motion } from "framer-motion";
import { AnimatePresence, motion } from "motion/react";
import ProductThumb from "./ProductThumb";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => {
        return (
          <AnimatePresence key={product._id}>
            <motion.div
              layout
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <ProductThumb key={product._id} product={product} />
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default ProductGrid;
