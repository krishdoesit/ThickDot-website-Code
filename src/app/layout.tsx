import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: {
        default: "Infinia Tech Solutions",
        template: "%s - Infinia Tech Solutions",
    },
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
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href={"/favicons/apple-touch-icon.png"} />
                <link rel="icon" type="image/png" sizes="32x32" href={"/favicons/favicon-32x32.png"} />
                <link rel="icon" type="image/png" sizes="16x16" href={"/favicons/favicon-16x16.png"} />
                <link rel="manifest" href={"/favicons/site.webmanifest"} />
            </head>
            <body className={`${inter.className} overflow-x-hidden bg-white antialiased`}>
                <Providers>
                    <NextTopLoader color="#3b82f6" zIndex={999} />
                    <Navigation />
                    <main className="mx-auto w-full max-w-screen-2xl">{children}</main>
                    <Footer />
                    <Toaster richColors theme="system" toastOptions={{ className: "shadow" }} />
                </Providers>
            </body>
        </html>
    );
}
