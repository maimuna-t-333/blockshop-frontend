import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-200 shadow-lg p-4">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="py-2">{product.description}</p>
      <p className="font-semibold">${product.price}</p>
      <Link href={`/products/${product._id}`} className="btn btn-sm btn-primary mt-2">
        Details
      </Link>
    </div>
  );
}
