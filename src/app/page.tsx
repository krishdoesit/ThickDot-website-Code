"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

import HeroSlider from "@/components/Sections/HeroSlider";
import Service from "@/components/Cards/Service";
import SectionDivider from "@/components/Sections/Divider";
import Feature from "@/components/Cards/Feature";
import TechStack from "@/components/Sections/TechStack";

import TerminalIcon from "@/components/Icons/Terminal";
import DollarIcon from "@/components/Icons/Dollar";
import HeartIcon from "@/components/Icons/Heart";
import PeopleIcon from "@/components/Icons/People";
import EarthIcon from "@/components/Icons/Earth";
import EnergyIcon from "@/components/Icons/Energy";
import SortHorizontalIcon from "@/components/Icons/SortHorizontal";
import RulerPenIcon from "@/components/Icons/RulerPen";

import Image from "next/image";

const projects = [
    {
        title: "Software Development",
        description: "Custom software solutions, including web and mobile applications, designed to meet unique business needs and drive productivity.",
        image: "/assets/images/software-development.svg",
        link: "/services/software-development",
        color: "from-white to-teal-50",
    },
    {
        title: "Web Development",
        description: "Create responsive, user-friendly websites that drive engagement, conversions, and growth for your business.",
        image: "/assets/images/web-development.png",
        link: "/services/web-development",
        color: "from-white to-emerald-50",
    },
    {
        title: "Mobile App Development",
        description: "Innovative mobile app solutions that engage users, drive conversions, and support business growth.",
        image: "/assets/images/mobile-app-development.png",
        link: "/services/mobile-app-development",
        color: "from-white to-rose-50",
    },
    {
        title: "IT Consulting & Strategy",
        description: "Expert guidance and strategic planning to help you leverage technology for business growth and success.",
        image: "/assets/images/it-consultancy.png",
        link: "/services/it-consulting-strategy",
        color: "from-white to-blue-50",
    },
    {
        title: "IoT Solutions",
        description: "Cutting-edge IoT solutions that connect devices, collect data, and drive efficiency and innovation.",
        image: "/assets/images/iot-solutions.png",
        link: "/services/iot-solutions",
        color: "from-white to-fuchsia-50",
    },
    {
        title: "Data Science and Analytics",
        description: "Harness the power of data to drive business growth, optimize operations, and make informed decisions.",
        image: "/assets/images/data-science-analytics.png",
        link: "/services/data-science-analytics",
        color: "from-white to-green-50",
    },
    {
        title: "Cloud Services and Migration",
        description: "Unlock the potential of the cloud with tailored strategies, seamless migrations, and optimized management for performance and flexibility.",
        image: "/assets/images/cloud-service.svg",
        link: "/services/cloud-services-and-migration",
        color: "from-white to-sky-50",
    },
    {
        title: "Blockchain Development",
        description: "Secure, transparent, and efficient blockchain solutions that drive innovation, security, and trust.",
        image: "/assets/images/blockchain-development.png",
        link: "/services/blockchain-development",
        color: "from-white to-emerald-50",
    },
    {
        title: "AI and Machine Learning",
        description: "Cutting-edge AI and machine learning solutions that drive automation, efficiency, and innovation.",
        image: "/assets/images/ai-machine-learning.png",
        link: "/services/ai-and-machine-learning",
        color: "from-white to-purple-50",
    },
];

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

const faq = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of services, including software development, cloud services, data management, DevOps, digital transformation, and business intelligence.",
    },
    {
        question: "How do I get started?",
        answer: "To get started, simply contact us through our website or phone number. We'll discuss your project requirements and provide a tailored solution.",
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing is competitive and transparent. We offer flexible payment options to suit your budget and project needs.",
    },
];

export default function Home() {
    return (
        <>
            <HeroSlider />
            <div className="mx-0 flex flex-col gap-6 rounded-2xl bg-slate-50 px-4 py-10 md:mx-6">
                <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-4xl font-bold text-gray-700">
                        Our <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-center text-gray-600">We offer a wide range of services to meet your needs.</p>
                </div>
                <div className="mx-auto mt-8 w-full max-w-7xl columns-1 gap-10 p-2 md:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-8">
                    {projects.map((project) => (
                        <Service key={project.title} title={project.title} description={project.description} image={project.image} link={project.link} color={project.color} />
                    ))}
                </div>
            </div>
            <SectionDivider />
            <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                <h2 className="text-4xl font-bold text-gray-700">
                    Why <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Infinia</span> Tech?
                </h2>
                <p className="text-center text-gray-600">Passionate about building software that is both functional and easy to use.</p>
            </div>
            <div className="max-w-8xl relative z-10 mx-auto grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
            <SectionDivider />

            <div className="relative mx-5 my-10 flex flex-col border-2 border-dashed border-gray-300 sm:mx-8">
                <h2 className="px-4 py-6 text-center text-2xl font-black text-gray-700 sm:text-3xl md:text-6xl">
                    Develop Your <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Dream Software</span> with Us
                </h2>
                <div className="border-b-2 border-t-2 border-dashed border-gray-300 py-8">
                    <p className="mx-auto max-w-3xl px-4 py-6 text-center text-gray-600">Welcome to Infinia Tech Solutions, where technology and innovation meet to drive your business forward. We specialize in providing cutting-edge solutions across software development, cloud services, data management, DevOps, digital transformation, and business intelligence.</p>
                </div>
                <div className="flex w-full justify-center">
                    <TechStack />
                </div>
                <div className="absolute -bottom-5 -right-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white">
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-5 w-5 rounded-full bg-primary"></span>
                </div>
                <div className="absolute -bottom-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white">
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-5 w-5 rounded-full bg-primary"></span>
                </div>
                <div className="absolute -right-5 -top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white">
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-5 w-5 rounded-full bg-primary"></span>
                </div>
                <div className="absolute -left-5 -top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-white">
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-5 w-5 rounded-full bg-primary"></span>
                </div>
            </div>
            <SectionDivider />

            <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                <h2 className="text-center text-4xl font-bold text-gray-700">
                    Frequently Asked <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Questions</span>
                </h2>
                <p className="w-full text-center text-gray-600">These are some of the most frequently asked questions about our services.</p>
            </div>
            <div className="my-10 flex flex-col items-center justify-center gap-10 p-4 md:flex-row">
                <Image src="/assets/images/faq.jpg" alt="FAQ" width={300} height={300} />
                <Accordion className="h-fit max-w-3xl overflow-hidden border-gray-300" variant="bordered">
                    {faq.map((item) => (
                        <AccordionItem key={item.question} aria-label={item.question} title={item.question} classNames={{ content: "text-gray-600 pt-0" }}>
                            <p>{item.answer}</p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
}
