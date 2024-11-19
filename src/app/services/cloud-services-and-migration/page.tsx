import { Metadata } from "next";
import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";
import MobileIcon from "@/components/Icons/Filled/Mobile";
import CloudServiceIcon from "@/components/Icons/Filled/CloudService";
import CloudMigrationIcon from "@/components/Icons/Filled/CloudMigration";
import ShieldIcon from "@/components/Icons/Filled/Shield";

export const metadata: Metadata = {
    title: "Cloud Solutions & Migration Services",
    description: "Transform your business with enterprise-grade cloud solutions. We offer cloud migration, cloud-native apps, hybrid cloud setup, and cloud security services.",
};

const steps = [
    {
        number: 1,
        title: "Cloud Assessment Phase",
        description: "We conduct a thorough analysis of your current infrastructure, applications, and workloads to create a detailed cloud readiness assessment. This helps identify potential challenges, compliance requirements, and optimal migration strategies.",
        list: ["Infrastructure and application portfolio analysis", "TCO and ROI calculation", "Compliance and security requirement mapping", "Performance baseline establishment"],
        side: "left",
        image: "/assets/images/approach/planning.jpg",
    },
    {
        number: 2,
        title: "Migration Planning",
        description: "Our experts develop a comprehensive migration roadmap tailored to your business needs. We prioritize workloads, design the target architecture, and establish clear timelines while minimizing business disruption and ensuring data integrity.",
        list: ["Workload prioritization framework", "Architecture blueprint design", "Risk mitigation strategy", "Resource allocation planning"],
        side: "right",
        image: "/assets/images/approach/design.jpg",
    },
    {
        number: 3,
        title: "Cloud Foundation Setup",
        description: "We establish a robust cloud foundation by implementing core infrastructure, security controls, and governance frameworks. This includes setting up networking, identity management, and monitoring systems for optimal cloud operations.",
        list: ["Infrastructure as Code implementation", "Security and compliance framework", "Monitoring and alerting setup", "Network architecture design"],
        side: "left",
        image: "/assets/images/approach/cloud-planning.jpg",
    },
    {
        number: 4,
        title: "Migration Execution",
        description: "Our team executes the migration using industry-best practices and tools, ensuring minimal downtime. We perform thorough testing at each stage and optimize workloads for cloud-native capabilities while maintaining business continuity.",
        list: ["Automated migration tools", "Performance optimization", "Continuous testing and validation", "Zero-downtime migration"],
        side: "right",
        image: "/assets/images/approach/deployment.jpg",
    },
    {
        number: 5,
        title: "Cloud Optimization",
        description: "We continuously monitor and optimize your cloud environment to ensure maximum efficiency and cost-effectiveness. This includes implementing auto-scaling, right-sizing resources, and optimizing storage and compute utilization.",
        list: ["Cost optimization", "Performance monitoring", "Resource right-sizing", "Automated scaling implementation"],
        side: "left",
        image: "/assets/images/approach/cloud-service.jpg",
    },
];

const solutions = [
    {
        title: "Cloud Migration",
        description: "Seamless transition of your applications and data to cloud platforms with minimal disruption and maximum security assurance.",
        icon: <CloudMigrationIcon />,
    },
    {
        title: "Cloud Native Apps",
        description: "Development and modernization of applications using cloud-native technologies for enhanced scalability and performance.",
        icon: <MobileIcon />,
    },
    {
        title: "Hybrid Cloud Setup",
        description: "Implementation of hybrid cloud environments that combine on-premises infrastructure with public cloud services seamlessly.",
        icon: <CloudServiceIcon />,
    },
    {
        title: "Cloud Security",
        description: "Implementation of robust security measures and compliance frameworks to protect your cloud infrastructure and data.",
        icon: <ShieldIcon />,
    },
];

const techStacks = [
    {
        name: "AWS",
        image: "/assets/images/technology/aws.png",
    },
    {
        name: "Azure",
        image: "/assets/images/technology/azure.png",
    },
    {
        name: "Docker",
        image: "/assets/images/technology/docker.png",
    },
    {
        name: "Kubernetes",
        image: "/assets/images/technology/kubernetes.png",
    },
];

const CloudSolutionsAndMigration = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Transform Your Business with <SelectedText text="Enterprise-Grade" /> Cloud Solutions
                    </h2>
                    <p>Accelerate your digital transformation with our comprehensive cloud migration and optimization services. We help businesses harness the full potential of cloud computing while ensuring security, scalability, and cost-effectiveness.</p>
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
                    <Image src="/assets/images/services/cloud-solutions-and-migration.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
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

export default CloudSolutionsAndMigration;
