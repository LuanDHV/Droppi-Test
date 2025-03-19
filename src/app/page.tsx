"use client";

import { useState } from "react";
import ProductCard, { IProductProps } from "./components/ProductCard";
import { mockProducts } from "./lib/mockData";

export default function Home() {
  const ProductsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockProducts.length / ProductsPerPage);

  const paginatedProducts = mockProducts.slice(
    (currentPage - 1) * ProductsPerPage,
    currentPage * ProductsPerPage,
  );

  return (
    <>
      <main className="container mx-auto">
        <h1 className="my-8 text-center text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
          Sản Phẩm Nổi Bật
        </h1>
        <div className="grid grid-cols-2 items-center justify-items-center gap-2 bg-white md:grid-cols-4 md:gap-5">
          {paginatedProducts.map((product: IProductProps) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center gap-2 pb-10">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`rounded-md px-4 py-2 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
