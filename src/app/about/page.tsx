"use client";

import SelectedText from "@/components/Animation/SelectedText";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Feature from "@/components/Cards/Feature";
import Pros from "@/components/Cards/Pros";
import SectionDivider from "@/components/Sections/Divider";
import Typewriter from "@/components/Animation/Typewriter";

import TerminalIcon from "@/components/Icons/Terminal";
import DollarIcon from "@/components/Icons/Dollar";
import HeartIcon from "@/components/Icons/Heart";
import TickIcon from "@/components/Icons/Tick";
import PeopleIcon from "@/components/Icons/People";
import EarthIcon from "@/components/Icons/Earth";
import EnergyIcon from "@/components/Icons/Energy";
import SortHorizontalIcon from "@/components/Icons/SortHorizontal";
import RulerPenIcon from "@/components/Icons/RulerPen";

const pros = [
    {
        name: "Customer Centric Approach",
        description: "We don’t just provide technology; we deliver solutions that work for your business. Every project begins with understanding your unique challenges, processes, and goals to ensure our solutions align perfectly with your needs.",
        image: "/assets/images/illustrators/customer-centric-approach.png",
    },
    {
        name: "Transparency and Alignment",
        description: "Unlike traditional offshore development models, we manage operations from North America, maintaining clear communication and eliminating cultural and time-zone barriers. This ensures you always have direct access to top-tier developers and a team that truly understands your vision.",
        image: "/assets/images/illustrators/transparency-and-alignment.png",
    },
    {
        name: "Cost Effective Excellence",
        description: "Our unique model allows us to deliver high-quality solutions at a fraction of the cost of traditional development firms. We provide the best of both worlds: local management and global expertise, ensuring you get the best value for your investment.",
        image: "/assets/images/illustrators/cost-effective-excellence.png",
    },
    {
        name: "Innovation and Scalability",
        description: "We stay ahead of the curve, adopting the latest technologies and trends to ensure your solutions are always cutting-edge. Our scalable solutions grow with your business, adapting to your changing needs and ensuring long-term success.",
        image: "/assets/images/illustrators/innovation-and-scalability.png",
    },
];

const heroList = ["Automate processes to free up your time and resources.", "Utilize advanced technology to create seamless, efficient workflows.", "Deliver measurable results while maintaining financial feasibility."];

const features = [
    {
        title: "Experienced Team",
        description: "Our developers and technical leads boast over 15+ years of expertise, ensuring world-class quality in every solution.",
        icon: <PeopleIcon />,
    },
    {
        title: "Local Management, Global Delivery",
        description: "North American project management meets the technical brilliance of a globally distributed team.",
        icon: <EarthIcon />,
    },
    {
        title: "Results-Driven Solutions",
        description: "Every project is designed to solve problems, meet business goals, and drive long-term success.",
        icon: <DollarIcon />,
    },
    {
        title: "Modern, Future-Proof Technology",
        description: "We stay ahead of trends, ensuring your solutions remain relevant and competitive.",
        icon: <EnergyIcon />,
    },
    {
        title: "Transparent Collaboration",
        description: "We prioritize communication and cultural understanding, bridging gaps to ensure seamless collaboration.",
        icon: <SortHorizontalIcon />,
    },
    {
        title: "Attention to Detail",
        description: "We’re meticulous in every phase, ensuring our solutions align with your business goals and deliver measurable results.",
        icon: <RulerPenIcon />,
    },
    {
        title: "Seamless Integration",
        description: "From automation to advanced technology adoption, we ensure that our solutions integrate flawlessly into your operations, letting you focus on what matters.",
        icon: <TerminalIcon />,
    },
    {
        title: "Tailored Support",
        description: "Acting as your dedicated IT team, we provide ongoing support and guidance to ensure your systems are always optimized and effective.",
        icon: <HeartIcon />,
    },
];

const About = () => {
    const words = ["Startup", "Small Business", "Medium Business", "Enterprise"];

    const handleClick = () => {
        const element = document.getElementById("hero");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 py-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col gap-4 md:p-6 lg:w-1/2">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        We are an <SelectedText text="AI-Powered" /> company that makes dreams come true.
                    </h2>
                    <p>At ThickDot, we bridge the gap between cutting-edge technology and real-world business needs. Headquartered in North America, we bring you the best of both worlds: a locally managed presence to ensure seamless communication and cultural alignment, and a globally experienced technical team with over 15+ years of expertise. This unique model allows us to deliver innovative, cost-effective solutions tailored to your specific goals.</p>
                    <div className="mt-4 flex gap-4 md:mt-8">
                        <Button color="primary" radius="full" as={Link} href="/contact">
                            Get Started
                        </Button>
                        <Button variant="flat" className="bg-gray-200" radius="full" href="#hero" onPress={() => handleClick()}>
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="w-full shrink-0 lg:w-1/2">
                    <Image src="/assets/images/map.png" alt="About" width={1000} height={500} className="my-auto h-auto w-full" />
                </div>
            </div>

            <div id="hero" className="m-4 max-w-full rounded-3xl bg-[url('/assets/images/tech-person.webp')] bg-cover bg-left-top bg-no-repeat p-8 md:p-20">
                <div className="flex max-w-2xl flex-col justify-center gap-10">
                    <div className="flex flex-col gap-3 text-6xl font-black tracking-wide text-white">
                        <span>
                            One <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Problem</span>
                        </span>
                        <span>
                            Infinite <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Solutions</span>
                        </span>
                    </div>
                    <p className="text-medium font-medium text-gray-200">We aim to empower businesses by leveraging technology as a superpower. By combining a deep understanding of business processes with technical excellence, we create impactful, future-proof solutions that drive significant results.</p>
                    <Typewriter fixedText="For" words={words} typingSpeed={100} erasingSpeed={50} delay={1000} className="mt-4 text-2xl font-bold text-white md:text-4xl" />
                    <ul className="flex flex-col gap-4">
                        {heroList.map((item, index) => (
                            <li className="flex gap-2 text-xl text-gray-200" key={index}>
                                <TickIcon className="mb-auto mt-0.5 shrink-0 text-teal-500" size={28} /> <p className="my-auto">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <SectionDivider />

            <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                <h2 className="text-center text-4xl font-bold text-gray-700">
                    What <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Sets Us</span> Apart?
                </h2>
                <p className="text-center text-gray-600">We are committed to delivering exceptional value through innovative, cost-effective solutions.</p>
            </div>
            <div className="max-w-8xl flex flex-wrap justify-center gap-6 px-4 py-10">
                {pros.map((pro) => (
                    <Pros key={pro.name} name={pro.name} description={pro.description} image={pro.image} />
                ))}
            </div>

            <SectionDivider />

            <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                <h2 className="text-center text-4xl font-bold text-gray-700">
                    Why <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Infinia</span> Tech?
                </h2>
                <p className="text-center text-gray-600">Passionate about building software that is both functional and easy to use.</p>
            </div>
            <div className="max-w-8xl relative z-10 mx-auto grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </>
    );
};

export default About;
