import "./globals.css";
import RootProvider from "@/components/RootProvider";

export const metadata = {
  title: "BlockShop",
  description: "Next.js + Express + MongoDB Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

