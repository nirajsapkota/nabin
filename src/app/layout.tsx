import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
    title: "Nabin Sapkota - Product Designer",
    description: "Welcome to my design portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased font-helvetica leading-relaxed p-6 max-w-7xl mx-auto">
                <Header />
                {children}
            </body>
        </html>
    );
}
