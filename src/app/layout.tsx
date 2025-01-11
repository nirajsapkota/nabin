import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/navigation";
import { Dynalight } from "next/font/google";

const dynalight = Dynalight({
    weight: "400",
    variable: "--font-dynalight",
});

// Note: The inter used by the designer appears to be different to the one from the google fonts library.
const inter = localFont({
    src: "../../public/fonts/inter-bold.ttf",
    weight: "700",
    style: "normal",
    variable: "--font-inter",
});

const helvetica = localFont({
    src: "../../public/fonts/helvetica-light.ttf",
    weight: "300",
    style: "normal",
    variable: "--font-helvetica",
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
                className={`font-sans ${inter.variable} ${ppNeueMontreal.variable} ${dynalight.variable} ${helvetica.variable}`}
            >
                <div className="pl-6 pr-6 pt-6 max-w-7xl mx-auto ">
                    <Navigation />
                    {children}
                </div>
                <div className="flex flex-col items-center bg-[#1E1E1E] p-6">
                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl py-6 gap-y-6">
                        <div className="flex w-full md:w-2/6 items-center gap-x-4">
                            <Link
                                href="#"
                                className="font-bold flex justify-center w-1/2 py-4 text-white border-2 border-white rounded-full"
                            >
                                LINKEDIN
                            </Link>
                            <Link
                                href="#"
                                className="font-bold flex justify-center w-1/2 py-4 text-white border-2 border-white rounded-full"
                            >
                                CONTACT ME
                            </Link>
                        </div>
                        <p className="text-white text-right">
                            <span className="text-[#7A7A7A]">Design by </span>
                            Nabin Sapkota
                            <span className="md:hidden">
                                <br />© 2025
                            </span>
                        </p>
                    </div>
                </div>
            </body>
        </html>
    );
}
