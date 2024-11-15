import { Metadata } from "next";
import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";
import CodeIcon from "@/components/Icons/Filled/Code";
import BuildingsIcon from "@/components/Icons/Filled/Buildings";
import LaptopIcon from "@/components/Icons/Filled/Laptop";
import ChargeIcon from "@/components/Icons/Filled/Charge";

export const metadata: Metadata = {
    title: "Software Development",
    description: "We offer custom software development services to help businesses streamline operations, enhance productivity, and drive growth.",
};

const steps = [
    {
        number: 1,
        title: "Discovery & Planning",
        description: "Begin with a deep dive into your business requirements, challenges, and goals. Our experts analyze your needs, define project scope, create detailed roadmaps, and establish clear milestones for success.",
        list: ["Requirements gathering workshops", "Technical feasibility analysis", "Project scope documentation", "Timeline and resource planning"],
        side: "left",
        image: "/assets/images/approach/planning.jpg",
    },
    {
        number: 2,
        title: "Architecture Design",
        description: "Design a robust, scalable architecture that aligns with your business objectives. Our architects create detailed technical specifications, select optimal technologies, and establish development patterns for seamless execution.",
        list: ["System architecture blueprints", "Technology stack selection", "Security framework design", "Integration planning"],
        side: "right",
        image: "/assets/images/approach/design.jpg",
    },
    {
        number: 3,
        title: "Development & Testing",
        description: "Transform designs into functional software through iterative development cycles. Our agile approach ensures continuous testing, quality assurance, and regular feedback integration for optimal results.",
        list: ["Agile development sprints", "Continuous integration/deployment", "Automated testing", "Regular progress updates"],
        side: "left",
        image: "/assets/images/approach/development.jpg",
    },
    {
        number: 4,
        title: "Deployment & Support",
        description: "Launch your software with confidence through our comprehensive deployment process. We ensure smooth transition, provide thorough documentation, and offer ongoing support to maintain peak performance.",
        list: ["Production environment setup", "Performance monitoring", "User training sessions", "Maintenance and updates"],
        side: "right",
        image: "/assets/images/approach/support.jpg",
    },
];

const solutions = [
    {
        title: "Enterprise Solutions",
        description: "Custom enterprise software development tailored to streamline operations, enhance productivity, and drive business growth.",
        icon: <BuildingsIcon />,
    },
    {
        title: "API Development",
        description: "Robust and scalable API solutions enabling seamless integration between systems and third-party applications.",
        icon: <CodeIcon />,
    },
    {
        title: "Legacy Modernization",
        description: "Transform outdated systems into modern, efficient applications while preserving critical business logic and data.",
        icon: <ChargeIcon />,
    },
    {
        title: "Custom Applications",
        description: "Bespoke software solutions designed to address unique business challenges and optimize specific workflows.",
        icon: <LaptopIcon />,
    },
];

const techStacks = [
    {
        name: "React",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Node.js",
        image: "/assets/images/technology/nodejs.png",
    },
    {
        name: "MongoDB",
        image: "/assets/images/technology/mongodb.png",
    },
    {
        name: "Express.js",
        image: "/assets/images/technology/express-js.png",
    },
    {
        name: "Django",
        image: "/assets/images/technology/django.png",
    },
    {
        name: "Spring Boot",
        image: "/assets/images/technology/spring-boot.png",
    },
    {
        name: "Java",
        image: "/assets/images/technology/java.png",
    },
    {
        name: "Backbase",
        image: "/assets/images/technology/backbase.png",
    },
    {
        name: ".Net Core",
        image: "/assets/images/technology/net-core.png",
    },
    {
        name: "Kafka",
        image: "/assets/images/technology/kafka.png",
    },
];

const SoftwareDevelopment = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Customized <SelectedText text="Software" /> Solutions to Elevate Your Business.
                    </h2>
                    <p>Our software development services, backed by over 15 years of experience, deliver custom solutions that enhance workflows and productivity. From responsive web platforms to powerful mobile applications, we tailor each project to address unique business challenges and growth needs.</p>
                    <div className="mt-4 flex gap-4 md:mt-8">
                        <Button color="primary" radius="full" as={Link} href="/contact">
                            Get Service
                        </Button>
                        <Button variant="flat" className="bg-gray-200" radius="full" as={Link} href="/about">
                            About Us
                        </Button>
                    </div>
                </div>
                <div className="w-full shrink-0 lg:w-2/5">
                    <Image src="/assets/images/services/software-development.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
                </div>
            </div>
            <SectionDivider />

            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 mb-8 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-center text-4xl font-bold text-gray-700">
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Approach</span> To Be Used
                    </h2>
                    <p className="text-center text-gray-600">How we work to deliver the best web development solutions.</p>
                </div>
                {steps.map((step) => (
                    <Steps key={step.number} number={step.number} title={step.title} description={step.description} list={step.list} side={step.side as "left" | "right"} image={step.image} />
                ))}
            </div>

            <SectionDivider />
            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-center text-4xl font-bold text-gray-700">
                        What <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">We Are Doing</span> For This?
                    </h2>
                    <p className="text-center text-gray-600">We offer a range of solutions to meet your unique needs and deliver exceptional results.</p>
                </div>
                <div className="columns-1 gap-4 p-2 md:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-4">
                    {solutions.map((solution) => (
                        <Solution key={solution.title} title={solution.title} description={solution.description} icon={solution.icon} />
                    ))}
                </div>
            </div>
            <SectionDivider />
            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-center text-4xl font-bold text-gray-700">
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Tech Stack</span> We Leverage
                    </h2>
                    <p className="text-center text-gray-600">We use the latest technologies and tools to build and drive growth.</p>
                </div>
                <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
                    {techStacks.map((techStack) => (
                        <TechStack key={techStack.name} name={techStack.name} image={techStack.image} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SoftwareDevelopment;
