"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/lib/api";
import Spinner from "@/components/Spinner";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(params.id)
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) return <Spinner />;
  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold mb-2">Price: ${product.price}</p>
      <p className="text-sm text-gray-500">Created by: {product.createdBy}</p>
    </section>
  );
}

