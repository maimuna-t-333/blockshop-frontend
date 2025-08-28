    "use client";

    import Link from "next/link";
    import { useSession, signOut } from "next-auth/react";

    export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="navbar bg-[#EAE4D5] px-10">
        <div className="flex-1">
            <Link href="/" className="font-bold normal-case text-xl">BlockShop</Link>
        </div>
        <div className="flex-none gap-3">
            <Link href="/products" className="m-4 font-semibold">Products</Link>
            {session ? (
            <>
                <Link href="/dashboard/add-product" className="btn btn-outline">Add Product</Link>
                <button onClick={() => signOut()} className="btn btn-outline">Logout</button>
            </>
            ) : (
            <Link href="/login" className="btn font-semibold btn-outline">Login</Link>
            )}
        </div>
        </nav>
    );
    }

