import Link from "next/link";
import Image from "next/image";
import type { ProjectDetails } from "@/app/types";
import Arrow from "../../../../public/icons/45deg-arrow.svg";

function Project({ project }: { project: ProjectDetails }) {
    return (
        <Link href={project.link}>
            <article className="flex my-8 sm:h-48 md:h-64 gap-x-4 md:gap-x-24">
                <div className="relative group w-48 md:w-1/2 rounded-2xl">
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
                <div className="flex flex-col justify-between w-2/3 md:w-1/2">
                    <div className="flex justify-between md:hidden">
                        <span></span>
                        <Image src={Arrow} alt={project.title} />
                    </div>
                    <div>
                        <p className="text-gray-600">{project.subtitle}</p>
                        <h2 className="font-helvetica text-[25px] md:text-[32px]">
                            {project.title}
                        </h2>
                    </div>
                    <p className="mb-3">{project.description}</p>
                    <div className="hidden md:flex border-2 border-black rounded-lg justify-center gap-x-2 py-2">
                        View
                        <Image src={Arrow} alt={project.title} />
                    </div>
                </div>
            </article>
        </Link>
    );
}

export { Project };
