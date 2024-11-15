import { Metadata } from "next";
import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";
import SmartHomeIcon from "@/components/Icons/Filled/SmartHome";
import DevicesIcon from "@/components/Icons/Filled/Devices";
import HospitalIcon from "@/components/Icons/Filled/Hospital";
import BuildingsIcon from "@/components/Icons/Filled/Buildings";

export const metadata: Metadata = {
    title: "IoT Solutions",
    description: "Unlock the potential of the Internet of Things (IoT) to enhance operational efficiency, drive innovation, and improve customer engagement. Our tailored IoT solutions empower businesses to connect devices, gather data, and make informed decisions seamlessly.",
};

const steps = [
    {
        number: 1,
        title: "Consultation Phase",
        description: "We initiate the process with a thorough consultation to assess your business needs and objectives. This phase involves detailed discussions with stakeholders to identify specific challenges and opportunities for IoT integration. We analyze existing workflows and systems to ensure our solutions are aligned with your strategic goals.",
        list: ["Personalized consultations tailored to your industry", "Stakeholder engagement sessions", "Detailed needs assessment and feasibility studies", "Competitive analysis to benchmark against industry standards"],
        side: "left",
        image: "/assets/images/approach/planning.jpg",
    },
    {
        number: 2,
        title: "Solution Design",
        description: "Our team crafts a customized IoT solution that meets your unique requirements. This involves selecting appropriate devices, platforms, and technologies, while also considering scalability and future growth. We create a detailed architecture blueprint that outlines system interactions and data flow.",
        list: ["Tailored solution architecture based on business", "Device selection guidance for optimal performance", "Technology stack recommendations for scalability", "Prototyping to visualize the solution before implementation"],
        side: "right",
        image: "/assets/images/approach/design.jpg",
    },
    {
        number: 3,
        title: "Implementation",
        description: "We execute the deployment of the designed IoT solution, ensuring seamless integration with your existing systems. Our team manages the entire process, including device installation, configuration, and system integration, while adhering to best practices to minimize operational disruption.",
        list: ["Comprehensive project management", "System integration with existing IT infrastructure", "Device configuration for optimal functionality", "User training sessions to ensure smooth adoption"],
        side: "left",
        image: "/assets/images/approach/implementation.jpg",
    },
    {
        number: 4,
        title: "Monitoring & Support",
        description: "Post-deployment, we provide ongoing monitoring and support services to ensure the IoT system operates efficiently. Our dedicated support team is available for troubleshooting, regular maintenance checks, and performance optimization, ensuring your system remains up-to-date with evolving technology.",
        list: ["24/7 monitoring of device performance and data integrity", "Technical support with rapid response times", "Regular maintenance checks to prevent downtime", "Performance analytics to identify areas for improvement"],
        side: "right",
        image: "/assets/images/approach/support.jpg",
    },
    {
        number: 5,
        title: "Data Analytics & Insights",
        description: "We leverage advanced analytics tools to extract actionable insights from the data collected through IoT devices. This step involves setting up dashboards and reporting systems that allow you to visualize trends and make informed decisions based on real-time data.",
        list: ["Customizable dashboards for real-time data visualization", "Predictive analytics to forecast trends and behaviors", "Data integration from multiple sources for comprehensive insights", "Reporting tools that facilitate strategic decision-making"],
        side: "left",
        image: "/assets/images/approach/analysis.jpg",
    },
    {
        number: 6,
        title: "Scaling & Optimization",
        description: "As your business grows, we help scale your IoT solutions effectively. This includes optimizing existing systems, adding new devices, or enhancing functionalities to accommodate increased demand while ensuring security and compliance.",
        list: ["Scalability assessments to plan future expansions", "Security audits to protect sensitive data", "Continuous improvement strategies based on user feedback", "Integration of emerging technologies as they become available"],
        side: "right",
        image: "/assets/images/approach/scaling.jpg",
    },
];

const solutions = [
    {
        title: "Smart Home Solutions",
        description: "Enhance comfort and security in homes through smart devices that automate daily tasks and provide remote monitoring capabilities.",
        icon: <SmartHomeIcon />,
    },
    {
        title: "Industrial IoT",
        description: "Optimize manufacturing processes with IoT-enabled machinery that enhances productivity and reduces downtime through predictive maintenance.",
        icon: <DevicesIcon />,
    },
    {
        title: "Healthcare IoT",
        description: "Transform patient care with connected medical devices that enable real-time health monitoring and data collection for better outcomes.",
        icon: <HospitalIcon />,
    },
    {
        title: "Smart City Initiatives",
        description: "Contribute to urban development through intelligent infrastructure that improves traffic management, energy efficiency, and public safety.",
        icon: <BuildingsIcon />,
    },
];

const techStacks = [
    {
        name: "Kafka",
        image: "/assets/images/technology/kafka.png",
    },
    {
        name: "RabbitMQ",
        image: "/assets/images/technology/rabbitmq.png",
    },
    {
        name: "Redis",
        image: "/assets/images/technology/redis.png",
    },
];

const IotSolutions = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Transform Your Business with <SelectedText text="IoT Solutions" /> for Enhanced Connectivity
                    </h2>
                    <p>Unlock the potential of the Internet of Things (IoT) to enhance operational efficiency, drive innovation, and improve customer engagement. Our tailored IoT solutions empower businesses to connect devices, gather data, and make informed decisions seamlessly.</p>
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
                    <Image src="/assets/images/services/iot-solutions.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
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

export default IotSolutions;
