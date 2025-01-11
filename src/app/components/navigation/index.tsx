"use client";

import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { useState } from "react";
import VerticalCircle from "../../../../public/icons/vertical-circle.svg";
import Image from "next/image";

export default function Navigation() {
    const [hideMenu, setHideMenu] = useState(true);

    function show() {
        document.body.style.overflow = "hidden";
        setHideMenu(false);
    }

    function hide() {
        document.body.style.overflow = "";
        setHideMenu(true);
    }

    return (
        <nav>
            <div className="mx-auto flex flex-wrap items-center justify-between">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Nabin Sapkota</h1>
                    <p className="text-gray-600">Product Designer</p>
                </Link>
                <button
                    onClick={() => show()}
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm md:hidden"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open navigation menu</span>
                    <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="flex items-center space-x-8 text-center font-bold">
                        <Link
                            href=""
                            className="ml-6 text-gray-800 hover:text-gray-600 relative inline-block group"
                        >
                            Work
                            <span className="absolute w-full max-w-0 h-[2px] right-0 -bottom-1 bg-black group-hover:left-0 group-hover:max-w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href=""
                            className="ml-6 text-gray-800 hover:text-gray-600 relative inline-block group"
                        >
                            About
                            <span className="absolute w-full max-w-0 h-[2px] right-0 -bottom-1 bg-black group-hover:left-0 group-hover:max-w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href=""
                            className="ml-6 text-gray-800 hover:text-gray-600 relative inline-block group"
                        >
                            Contact
                            <span className="absolute w-full max-w-0 h-[2px] right-0 -bottom-1 bg-black group-hover:left-0 group-hover:max-w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            href=""
                            className="ml-6 text-gray-800 hover:text-gray-600 relative inline-block group"
                        >
                            Sketches
                            <span className="absolute w-full max-w-0 h-[2px] right-0 -bottom-1 bg-black group-hover:left-0 group-hover:max-w-full transition-all duration-300"></span>
                        </Link>
                    </ul>
                </div>
                <div
                    className={cn(
                        "fixed left-0 top-0 z-10 flex h-full w-full flex-col backdrop-blur-3xl",
                        { hidden: hideMenu },
                    )}
                >
                    <div className="flex justify-end p-8">
                        <button onClick={() => hide()} type="button">
                            <span className="sr-only">
                                Close navigation menu
                            </span>
                            <svg
                                className="h-12 w-12"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex h-4/6 flex-col items-center justify-center">
                        {/* Icon */}
                        <ul className="text-royal-blue flex flex-col space-y-20 text-3xl font-bold">
                            <Link
                                onClick={() => hide()}
                                href="#"
                                className="flex items-center gap-x-4"
                            >
                                <Image src={VerticalCircle} alt="circle" />
                                work
                            </Link>
                            <Link
                                onClick={() => hide()}
                                href="#"
                                className="flex items-center gap-x-4"
                            >
                                <Image src={VerticalCircle} alt="circle" />
                                about
                            </Link>
                            <Link
                                onClick={() => hide()}
                                href="#"
                                className="flex items-center gap-x-4"
                            >
                                <Image src={VerticalCircle} alt="circle" />
                                contact
                            </Link>
                            <Link
                                onClick={() => hide()}
                                href="#"
                                className="flex items-center gap-x-4"
                            >
                                <Image src={VerticalCircle} alt="circle" />
                                sketches
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
