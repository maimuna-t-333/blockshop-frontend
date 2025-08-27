import Link from "next/link";

export default function Home() {
  return (
    <section className="hero flex-1 bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to BlockShop!</h1>
          <p className="py-6">Browse products or add your own after login.</p>
          <Link href="/products" className="btn btn-primary">View Products</Link>
        </div>
      </div>
    </section>
  );
}


