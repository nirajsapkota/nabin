import Link from "next/link";
import Image from "next/image";
import type { ProjectDetails } from "@/app/types";
import { ArrowIcon } from "@/app/assets/icons/arrow-icon";

function Project({ project }: { project: ProjectDetails }) {
    return (
        <section className="mb-16">
            <h2 className="text-4xl font-inter">{project.title}</h2>
            <p className="mb-4 text-gray-600">{project.subtitle}</p>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-[250px] md:h-[370px] overflow-hidden mb-4 md:mb-0 md:mr-20 rounded-2xl">
                    <Link href={project.link} className="relative group">
                        <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            width={800}
                            height={800}
                            className="object-cover w-full h-full"
                        />
                        {/* Black overlay on the image that transitions from 0% to 50% opacity to darken the image. */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-2xl"></div>
                        {/* Text overlay on the image that transitions from 0% to 100% opacity to show the text "View" with an arrow icon. */}
                        <div className="absolute bottom-4 right-4 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center">
                            View
                            <ArrowIcon />
                        </div>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 text-[19px] md:text-[25px] md:leading-8 sm:leading-6 font-pp-neue-montreal">
                    {project.description.map((description, index) => (
                        <p key={index} className="mb-3">
                            {description}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Project };
