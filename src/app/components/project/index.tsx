import Link from "next/link";
import Image from "next/image";
import type { ProjectDetails } from "@/app/types";
import Arrow from "../../../../public/icons/45deg-arrow.svg";

function Project({ project }: { project: ProjectDetails }) {
    return (
        <Link href={project.link}>
            <article className="flex my-8 h-48 md:h-64 gap-x-4">
                <div className="relative group w-1/3 md:w-1/2 rounded-2xl">
                    <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={800}
                        height={800}
                        className="object-cover h-full rounded-2xl"
                    />
                    {/* Black overlay on the image that transitions from 0% to 50% opacity to darken the image. */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-2xl"></div>
                </div>
                <div className="w-2/3 md:w-1/2">
                    <div className="flex justify-between">
                        <p className="text-gray-600">{project.subtitle}</p>
                        <Image
                            src={Arrow}
                            alt={project.title}
                            className="md:hidden"
                        />
                    </div>
                    <h2 className="text-2xl font-inter">{project.title}</h2>
                    <p className="mb-3">{project.description}</p>
                    <div className="hidden md:flex border-2 border-black rounded-lg justify-center gap-x-2 py-1">
                        View
                        <Image src={Arrow} alt={project.title} />
                    </div>
                </div>
            </article>
        </Link>
    );
}

export { Project };
