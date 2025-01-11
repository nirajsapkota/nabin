"use client";

import { Project } from "./components/project";
import type { ProjectDetails } from "./types";

import VerticalCircle from "../../public/icons/vertical-circle.svg";
import BurstCircle from "../../public/icons/burst-circle.svg";
import SpokedCircle from "../../public/icons/spoked-circle.svg";
import Phone from "../../public/icons/phone.svg";
import BackToTop from "../../public/icons/back-to-top.svg";

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
            <div className="flex justify-between mt-16">
                <Image
                    src={Phone}
                    alt="Phone"
                    className="hidden md:block w-[207px] h-[428px]"
                />
                <div className="md:w-7/12">
                    <h1 className="font-helvetica text-[43px] md:text-[48px] leading-[.85] -tracking-[3]">
                        thoughtful designs,
                        <br />
                        beautiful results
                    </h1>
                    <br />
                    <p className="font-helvetica font-light w-5/6 md:w-full text-[21px] md:text-[28px]">
                        I believe good design feels natural—guiding without
                        overwhelming, solving without complicating.
                    </p>
                    <br />
                    <p className="font-helvetica font-light w-5/6 md:w-full text-[21px] md:text-[28px]">
                        My work is about listening closely, simplifying
                        thoughtfully, and crafting experiences that resonate.
                        Every project is an opportunity to learn, adapt, and
                        create something that not only works but feels right.
                    </p>
                </div>
            </div>

            <div className="flex my-24">
                <Image src={Phone} alt="Phone" className="mr-6 md:hidden" />
                <div className="flex flex-col justify-evenly md:flex-row md:w-full md:justify-between">
                    <div className="flex items-center">
                        <Image
                            src={VerticalCircle}
                            alt="simplistic"
                            className="mr-4"
                        />
                        <p className="font-dynalight italic text-[50px] lg:text-[68px]">
                            simplistic
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={BurstCircle}
                            alt="cohesive"
                            className="mr-4"
                        />
                        <p className="font-dynalight italic text-[50px] lg:text-[68px]">
                            cohesive
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src={SpokedCircle}
                            alt="memorable"
                            className="mr-4"
                        />
                        <p className="font-dynalight italic text-[50px] lg:text-[68px]">
                            memorable
                        </p>
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

            <div className="my-32">
                <div className="bg-black h-[2px] mb-4"></div>
                <div className="items-center justify-between hidden md:flex">
                    <div>© 2025</div>
                    <div className="flex items-center justify-center gap-x-4">
                        <div>BACK TO TOP</div>
                        <Image
                            src={BackToTop}
                            className="cursor-pointer"
                            alt="Back to top"
                            onClick={() => window.scrollTo(0, 0)}
                        />
                    </div>
                </div>
            </div>

            <h2 className="font-helvetica text-[25px] mb-14">
                have a project in mind?
                <br />
                <span className="text-[70px] md:text-[130px] lg:text-[170px] xl:text-[216px] leading-[.95]">
                    LET&apos;S TALK
                </span>
            </h2>
        </div>
    );
}
