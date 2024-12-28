import Link from "next/link";

const links = [
    {
        title: "All Works",
        link: "#all-works",
    },
    {
        title: "Contact",
        link: "#contact",
    },
    {
        title: "About",
        link: "#about",
    },
    {
        title: "Sketches",
        link: "#sketches",
    },
];

function Navigation() {
    return (
        <nav className="hidden md:flex">
            {links.map((link) => (
                <Link
                    key={link.title}
                    href={link.link}
                    className="ml-6 text-gray-800 hover:text-gray-600 relative inline-block group"
                >
                    {link.title}
                    <span className="absolute w-full max-w-0 h-[2px] right-0 -bottom-1 bg-black group-hover:left-0 group-hover:max-w-full transition-all duration-300"></span>
                </Link>
            ))}
        </nav>
    );
}

function MobileNavigation() {
    return (
        <nav className="md:hidden flex flex-col items-end">
            {links.map((link) => (
                <Link
                    key={link.title}
                    href={link.link}
                    className="text-gray-800 hover:text-gray-600"
                >
                    {link.title}
                </Link>
            ))}
        </nav>
    );
}

export { Navigation, MobileNavigation };
