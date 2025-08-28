import Link from "next/link";

const demoProducts = [
  { _id: "1", name: "Wireless Earbuds", price: 49, image: "https://cdn.pixabay.com/photo/2019/07/14/16/04/desk-4337472_1280.jpg" },
  { _id: "2", name: "Smart Watch", price: 99, image: "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg" },
  { _id: "3", name: "Gaming Mouse", price: 29, image: "https://cdn.pixabay.com/photo/2021/04/07/16/13/gaming-mouse-6159550_1280.jpg" },
];

export default function Home() {
  return (
    <section className="hero bg-[#B6B09F] min-h-screen">
      <div className="hero-content p-12 md:p-20 text-center flex flex-col items-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to BlockShop!
          </h1>
          <p className="py-6 text-lg text-gray-700">
            Browse products or add your own after logging in.
          </p>
          <Link href="/products" className="btn btn-outline">
            View Products
          </Link>
        </div>

        {/* Product Highlights - Horizontal */}
        <div className="mt-12 w-full overflow-x-auto">
          <div className="flex space-x-6 px-6">
            {demoProducts.map((product) => (
              <div
                key={product._id}
                className="card bg-base-200 shadow-lg p-4 min-w-[320px] flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="font-semibold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



