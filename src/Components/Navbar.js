    "use client";

    import Link from "next/link";
    import { useSession, signOut } from "next-auth/react";

    export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="navbar bg-base-200 px-6">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">BlockShop</Link>
        </div>
        <div className="flex-none gap-2">
            <Link href="/products" className="btn btn-ghost">Products</Link>
            {session ? (
            <>
                <Link href="/dashboard/add-product" className="btn btn-primary">Add Product</Link>
                <button onClick={() => signOut()} className="btn btn-secondary">Logout</button>
            </>
            ) : (
            <Link href="/login" className="btn btn-primary">Login</Link>
            )}
        </div>
        </nav>
    );
    }

