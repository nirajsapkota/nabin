"use client";

import { useState } from "react";
import { MenuIcon } from "@/app/assets/menu-icon";
import { MobileNavigation, Navigation } from "@/app/components/navigation";

export default function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function toggleMobileNav() {
        setIsMobileNavOpen((x) => !x);
    }

    return (
        <div className="mb-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Nabin Sapkota</h1>
                    <p className="text-gray-600">Product Designer</p>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileNav}
                        aria-label="Toggle navigation menu"
                        className="block cursor-pointer"
                    >
                        <MenuIcon />
                    </button>
                </div>
                <Navigation />
            </div>
            {isMobileNavOpen && <MobileNavigation />}
        </div>
    );
}
