"use client";

import HeroSlider from "@/components/Sections/HeroSlider";
import Service from "@/components/Cards/Service";
import SectionDivider from "@/components/Sections/Divider";
import Feature from "@/components/Cards/Feature";
import TechStack from "@/components/Sections/TechStack";

import TerminalIcon from "@/components/Icons/Terminal";
import DollarIcon from "@/components/Icons/Dollar";
import HeartIcon from "@/components/Icons/Heart";

const projects = [
    {
        title: "Software Development",
        description: "Custom software solutions, including web and mobile applications, designed to meet unique business needs and drive productivity.",
        image: "/assets/images/software-development.svg",
        link: "/services/software-development",
        color: "from-white to-teal-50",
    },
    {
        title: "Cloud Services and Migration",
        description: "Unlock the potential of the cloud with tailored strategies, seamless migrations, and optimized management for performance and flexibility.",
        image: "/assets/images/cloud-service.svg",
        link: "/services/cloud-services-and-migration",
        color: "from-white to-sky-50",
    },
    {
        title: "Data Architecture and Management",
        description: "Design scalable data models and efficient storage systems that support easy access, high performance, and data integrity.",
        image: "/assets/images/data-architecture.png",
        link: "/services/data-architecture-and-management",
        color: "from-white to-blue-50",
    },
    {
        title: "DevOps and Automation",
        description: "We set up robust Continuous Integration and Continuous Deployment (CI/CD) pipelines to streamline your software development process, ensuring faster, more reliable software delivery.",
        image: "/assets/images/devops.svg",
        link: "/services/devops-and-automation",
        color: "from-white to-indigo-50",
    },
    {
        title: "Digital Transformation Consulting",
        description: "We partner with you to create a technology roadmap that aligns with your business objectives, prioritizing scalability, flexibility, and efficiency to support growth.",
        image: "/assets/images/digital-transformation.png",
        link: "/services/digital-transformation-consulting",
        color: "from-white to-purple-50",
    },
];

const features = [
    {
        title: "Built for developers",
        description: "Built for engineers, developers, dreamers, thinkers and doers.",
        icon: <TerminalIcon />,
    },
    {
        title: "Ease of use",
        description: "It's as easy as using an Apple, and as expensive as buying one.",
        icon: <TerminalIcon />,
    },
    {
        title: "Pricing like no other",
        description: "Our prices are best in the market. No cap, no lock, no credit card required.",
        icon: <DollarIcon />,
    },
    {
        title: "100% Uptime guarantee",
        description: "We just cannot be taken down by anyone.",
        icon: <TerminalIcon />,
    },
    {
        title: "Multi-tenant Architecture",
        description: "You can simply share passwords instead of buying new seats",
        icon: <TerminalIcon />,
    },
    {
        title: "24/7 Customer Support",
        description: "We are available a 100% of the time. Atleast our AI Agents are.",
        icon: <TerminalIcon />,
    },
    {
        title: "Money back guarantee",
        description: "If you donot like EveryAI, we will convince you to like us.",
        icon: <TerminalIcon />,
    },
    {
        title: "And everything else",
        description: "I just ran out of copy ideas. Accept my sincere apologies",
        icon: <HeartIcon />,
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
                    <p className="text-gray-600">We offer a wide range of services to meet your needs.</p>
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
                <p className="text-gray-600">Passionate about building software that is both functional and easy to use.</p>
            </div>
            <div className="max-w-8xl relative z-10 mx-auto grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
            <SectionDivider />

            <div className="relative mx-5 my-10 flex flex-col border-2 border-dashed border-gray-300 sm:mx-8">
                <h1 className="px-4 py-6 text-center text-2xl font-black text-gray-700 sm:text-3xl md:text-6xl">
                    Develop Your <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Dream Software</span> with Us
                </h1>
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
        </>
    );
}
