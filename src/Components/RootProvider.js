
"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootProvider({ children }) {
  return (
    <SessionProvider>
      <div className="flex flex-col min-h-screen">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <Footer />
      </div>
    </SessionProvider>
  );
}

