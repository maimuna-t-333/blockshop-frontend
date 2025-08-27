"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { addProduct } from "@/lib/api";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  useEffect(() => {
    if (!session) router.push("/login");
  }, [session]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addProduct(form, session.accessToken);
      toast.success("Product added successfully!");
      router.push("/products");
    } catch {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <Toaster />
      <form onSubmit={handleSubmit} className="card p-6 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full mb-4"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
          required
        />
        <button type="submit" className={`btn btn-primary w-full ${loading ? "loading" : ""}`}>
          Add Product
        </button>
      </form>
    </div>
  );
}

