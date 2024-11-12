import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import Navigation from "@/components/Navigation/Navigation";
import NextTopLoader from "nextjs-toploader";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Infinia Tech Solutions",
    description: "Get your business online with Infinia Tech Solutions",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-dot-black/[0.2] bg-white antialiased`}>
                <Providers>
                    <NextTopLoader color="#3b82f6" zIndex={999} />
                    <Navigation />
                    <main className="mx-auto w-full max-w-screen-2xl">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
