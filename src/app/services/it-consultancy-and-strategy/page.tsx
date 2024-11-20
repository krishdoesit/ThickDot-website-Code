import { Metadata } from "next";
import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";
import RefreshIcon from "@/components/Icons/Filled/Refresh";
import ChargeIcon from "@/components/Icons/Filled/Charge";
import ScannerIcon from "@/components/Icons/Filled/Scanner";
import BuildingsIcon from "@/components/Icons/Filled/Buildings";

export const metadata: Metadata = {
    title: "IT Consultancy & Strategy",
    description: "We offer a range of IT consultancy and strategy services to help businesses leverage technology for growth and success.",
};

const steps = [
    {
        number: 1,
        title: "Assessment & Analysis",
        description: "Conduct comprehensive evaluation of your current IT infrastructure, business processes, and challenges. Our experts identify opportunities for optimization and create a strategic roadmap for transformation.",
        list: ["Infrastructure assessment", "Process gap analysis", "Risk evaluation", "Technology stack review"],
        side: "left",
        image: "/assets/images/approach/analysis.jpg",
    },
    {
        number: 2,
        title: "Strategy Development",
        description: "Develop a tailored IT strategy that aligns with your business objectives. We create detailed implementation plans, resource allocation strategies, and ROI projections to ensure successful outcomes.",
        list: ["Digital roadmap creation", "Technology selection", "Budget planning", "Risk mitigation strategies"],
        side: "right",
        image: "/assets/images/approach/development.jpg",
    },
    {
        number: 3,
        title: "Solution Design",
        description: "Transform strategies into actionable solutions. Our team designs scalable, future-proof architectures and systems that address your specific needs while ensuring optimal performance and security.",
        list: ["Architecture design", "Security framework", "Integration planning", "Scalability solutions"],
        side: "left",
        image: "/assets/images/approach/design.jpg",
    },
    {
        number: 4,
        title: "Implementation Guide",
        description: "Provide comprehensive guidance for solution implementation. We work closely with your team to ensure smooth execution, knowledge transfer, and successful adoption of new technologies.",
        list: ["Implementation roadmap", "Change management plan", "Team training programs", "Progress monitoring"],
        side: "right",
        image: "/assets/images/approach/implementation.jpg",
    },
];

const solutions = [
    {
        title: "Digital Transformation",
        description: "Comprehensive digital transformation strategies to modernize your business operations and enhance competitive advantage.",
        icon: <BuildingsIcon />,
    },
    {
        title: "Technology Advisory",
        description: "Expert guidance on technology selection, implementation, and optimization to achieve maximum business value.",
        icon: <ChargeIcon />,
    },
    {
        title: "Process Optimization",
        description: "Streamline business processes through innovative technology solutions and industry best practices.",
        icon: <ScannerIcon />,
    },
    {
        title: "Change Management",
        description: "Guide your organization through technological change with minimal disruption and maximum adoption.",
        icon: <RefreshIcon />,
    },
];

const techStacks = [
    {
        name: "Jira",
        image: "/assets/images/technology/jira.png",
    },
    {
        name: "Asana",
        image: "/assets/images/technology/asana.png",
    },
    {
        name: "Trello",
        image: "/assets/images/technology/trello.png",
    },
];

const ItConsultancyAndStrategy = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Strategic <SelectedText text="IT Solutions" /> to Drive Your Digital Transformation Journey.
                    </h2>
                    <p>Partner with our expert consultants to navigate the complex technology landscape and unlock your business potential. We deliver actionable strategies and innovative solutions that align with your goals and accelerate growth. We are a team of experienced IT consultants who are dedicated to helping businesses like yours leverage technology to achieve their strategic objectives.</p>
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
                    <Image src="/assets/images/services/it-consultancy-and-strategy.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
                </div>
            </div>
            <SectionDivider />

            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 mb-8 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-center text-4xl font-bold text-gray-700">
                    Our <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Approach</span>: Phases and Process
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
                        Strategic <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">IT Consulting</span> Solutions
                    </h2>
                    <p className="text-center text-gray-600">We offer a range of solutions to meet your unique needs and deliver exceptional results.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

export default ItConsultancyAndStrategy;
