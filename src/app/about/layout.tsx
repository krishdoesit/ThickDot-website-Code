import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "At ThickDot, we bridge the gap between cutting-edge technology and real-world business needs.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
