"use client";

import { Project } from "./components/project";
import type { ProjectDetails } from "./types";

import VerticalCircle from "../../public/icons/vertical-circle.svg";
import BurstCircle from "../../public/icons/burst-circle.svg";
import SpokedCircle from "../../public/icons/spoked-circle.svg";
import Phone from "../../public/icons/phone.svg";

import Image from "next/image";

const projects: ProjectDetails[] = [
    {
        title: "RØDECaster Video",
        subtitle: "UX Design, UI Design",
        link: "/project/rode-caster-video",
        image: {
            src: "/images/rode-caster-video.png",
            alt: "RØDECaster Video",
        },
        description:
            "Revolutionary new product category for RØDE – I was a part of the inception of the product and distilling it’s initial concept to develop a user-centric design language.",
    },
    {
        title: "RØDE Capture",
        subtitle: "UX Design, UI Design",
        link: "/project/rode-capture",
        image: {
            src: "/images/rode-capture.png",
            alt: "RØDE Capture App",
        },
        description:
            "Innovative video and audio capture app—I contributed to its design, enabling seamless control of RØDE microphones and enhancing dual-camera functionality.",
    },
    {
        title: "Wireless PRO",
        subtitle: "Embedded UI, UX, Product Graphics",
        link: "/project/rode-wireless-pro",
        image: {
            src: "/images/rode-wireless-pro.png",
            alt: "RØDE Wireless Pro",
        },
        description:
            "Redefined wireless audio recording for RØDE—I helped shape a user-focused interface, integrating 32-bit float recording, timecode sync, and GainAssist for effortless, high-quality capture.",
    },
];

export default function Home() {
    return (
        <div>
            <div className="flex justify-between mt-20">
                <Image
                    src={Phone}
                    alt="Phone"
                    className="hidden md:block w-[207px] h-[428px]"
                />

                <div className="md:w-7/12">
                    <h1 className="text-4xl">
                        thoughtful designs,
                        <br />
                        beautiful results
                    </h1>
                    <br />
                    <p className="w-2/3 md:w-full md:text-[28px]">
                        I believe good design feels natural—guiding without
                        overwhelming, solving without complicating.
                    </p>
                    <br />
                    <p className="w-2/3 md:w-full md:text-[28px]">
                        My work is about listening closely, simplifying
                        thoughtfully, and crafting experiences that resonate.
                        Every project is an opportunity to learn, adapt, and
                        create something that not only works but feels right.
                    </p>
                </div>
            </div>

            <div className="flex my-24">
                <Image src={Phone} alt="Phone" className="mr-20 md:hidden" />
                <div className="flex flex-col justify-evenly md:flex-row md:w-full md:justify-between">
                    <div className="flex items-center">
                        <Image
                            src={VerticalCircle}
                            alt="simplistic"
                            className="mr-4"
                        />
                        <p className="text-2xl underline">simplistic</p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={BurstCircle}
                            alt="cohesive"
                            className="mr-4"
                        />
                        <p className="text-2xl underline">cohesive</p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={SpokedCircle}
                            alt="memorable"
                            className="mr-4"
                        />
                        <p className="text-2xl underline">memorable</p>
                    </div>
                </div>
            </div>

            <h2 className="mb-14">
                check out my
                <br />
                <span className="text-4xl">
                    selected
                    <br /> projects
                </span>
            </h2>
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}

            <div className="bg-black h-1 my-16"></div>

            <h2 className="mb-14">
                have a project in mind?
                <br />
                <span className="text-4xl">LET&apos;S TALK</span>
            </h2>
        </div>
    );
}
