import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/header";
import type { Metadata } from "next";

// Note: The inter used by the designer appears to be different to the one from the google fonts library.
const inter = localFont({
    src: "../../public/fonts/inter-bold.ttf",
    weight: "700",
    style: "normal",
    variable: "--font-inter",
});

const ppNeueMontreal = localFont({
    src: [
        {
            path: "../../public/fonts/pp-neue-montreal-regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/pp-neue-montreal-bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-pp-neue-montreal",
});

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
            <body
                className={`font-sans p-6 max-w-7xl mx-auto ${inter.variable} ${ppNeueMontreal.variable}`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
