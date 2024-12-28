import { Project } from "./components/project";
import type { ProjectDetails } from "./types";

const projects: ProjectDetails[] = [
    {
        title: "RØDECaster Video",
        subtitle: "UX Design, UI Design",
        link: "/project/rode-caster-video",
        image: {
            src: "/images/rode-caster-video.png",
            alt: "RØDECaster Video",
        },
        description: [
            "Revolutionary new product category for RØDE – I was a part of the inception of the product and distilling it's initial concept to develop a user-centric design language.",
            "This was possible due to rigorous benchmarking, research and design iteration to identify user struggles and find the ideal interactions for an intuitive and aesthetic solution.",
        ],
    },
    {
        title: "RØDE Capture",
        subtitle: "UX Design, UI Design",
        link: "/project/rode-capture",
        image: {
            src: "/images/rode-capture.png",
            alt: "RØDE Capture App",
        },
        description: [
            "Designed an intuitive interface with innovative features for capturing professional video and audio.",
            "This included integrating complete in-app control of RØDE microphones and enhancing dual camera functionality, making the app versatile for various content creation needs.",
        ],
    },
    {
        title: "Wireless PRO",
        subtitle: "Embedded UI, UX, Product Graphics",
        link: "/project/rode-wireless-pro",
        image: {
            src: "/images/rode-wireless-pro.png",
            alt: "RØDE Wireless Pro",
        },
        description: [
            "Developed a user-friendly interface with advanced features for seamless audio recording.",
            "This included integrating 32-bit float on-board recording, timecode synchronization, and intelligent GainAssist technology, ensuring high-quality content capture in a compact wireless system.",
        ],
    },
];

export default function Home() {
    return (
        <div>
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
}
