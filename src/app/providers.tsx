"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "nextjs-toploader/app";

export default function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <NextUIProvider className="flex min-h-full flex-col" navigate={router.push}>
            {children}
        </NextUIProvider>
    );
}
