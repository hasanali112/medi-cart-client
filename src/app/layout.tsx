// app/layout.tsx
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

// Import the desired Google Font
const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medi Cart",
  description: "Medi Cart Ecommerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the font to the body */}
      <body className={josefinSans.className}>
        <Providers>
          <AppRouterCacheProvider>
            <Toaster position="top-center" />
            {children}
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
