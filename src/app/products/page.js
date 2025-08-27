"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Spinner from "@/components/Spinner";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
