import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import ShieldIcon from "@/components/Icons/Shield";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";

const solutions = [
    {
        title: "Custom Website Development",
        description: "Tailored websites built to meet unique business requirements, using modern frameworks like React, Angular, or Vue.js.",
        icon: <ShieldIcon />,
    },
    {
        title: "E-commerce Solutions",
        description: "Scalable and secure online stores with features like product management, payment gateway integration, and analytics.",
        icon: <ShieldIcon />,
    },
    {
        title: "CMS Development",
        description: "Flexible content management systems (e.g., WordPress, Drupal) to empower your team to manage and update content with ease.",
        icon: <ShieldIcon />,
    },
    {
        title: "Responsive Design",
        description: "Optimized websites that adapt seamlessly to various devices, ensuring a consistent and user-friendly experience across desktops, tablets, and smartphones.",
        icon: <ShieldIcon />,
    },
    {
        title: "Web Application Development",
        description: "High-performance applications designed for speed, reliability, and scalability. Built using cutting-edge technologies and best practices.",
        icon: <ShieldIcon />,
    },
    {
        title: "Website Maintenance",
        description: "Regular updates, bug fixes, and performance improvements to keep your site running smoothly.",
        icon: <ShieldIcon />,
    },
    {
        title: "API Integration",
        description: "Seamlessly connect your website with third-party platforms, such as payment gateways, CRMs, or social media tools.",
        icon: <ShieldIcon />,
    },
];

const techStacks = [
    {
        name: "React",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Next.js",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Node.js",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Express.js",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "MongoDB",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "PostgreSQL",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Tailwind CSS",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "TypeScript",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Python",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Django",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Flask",
        image: "/assets/images/technology/react.png",
    },
];

const steps = [
    {
        number: 1,
        title: "Discovery and Planning",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries..",
        list: ["Initial consultation to gather requirements", "Define objectives, scope, and timeline", "Conduct feasibility study or technical analysis", "Create a project roadmap and budget estimation"],
        side: "left",
        image: "/assets/images/ai-technology.jpg",
    },
    {
        number: 2,
        title: "Design and Prototyping",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.  ",
        list: ["Develop wireframes and user flows", "Create design mockups or prototypes", "Gather client feedback and refine designs"],
        side: "right",
        image: "/assets/images/ai-technology.jpg",
    },
    {
        number: 3,
        title: "Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
        list: ["Front-end and back-end development", "Regular progress updates and client check-ins", "Integration with third-party services, APIs, and databases"],
        side: "left",
        image: "/assets/images/ai-technology.jpg",
    },
    {
        number: 4,
        title: "Testing and Quality Assurance",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
        list: ["Conduct functional, performance, and security testing", "Gather feedback through beta testing (if applicable)", "Fix any identified issues and refine the product"],
        side: "right",
        image: "/assets/images/ai-technology.jpg",
    },
    {
        number: 5,
        title: "Deployment and Launch",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
        list: ["Set up hosting and domain (for web projects)", "Publish the app to relevant app stores", "Ensure smooth transition to the live environment"],
        side: "left",
        image: "/assets/images/ai-technology.jpg",
    },
    {
        number: 6,
        title: "Support and Maintenance",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
        list: ["Regular updates and bug fixes", "Performance monitoring and scaling as needed", "Additional features or modifications based on client feedback"],
        side: "right",
        image: "/assets/images/ai-technology.jpg",
    },
];

const WebDevelopment = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Building <SelectedText text="Responsive" /> Optimized And SEO Ready Web Applications.
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="mt-4 flex gap-4 md:mt-8">
                        <Button color="primary" radius="full" as={Link} href="/contact">
                            Get Service
                        </Button>
                        <Button variant="flat" className="bg-gray-200" radius="full">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="w-full shrink-0 lg:w-2/5">
                    <Image src="/assets/images/services/web-development.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
                </div>
            </div>
            <SectionDivider />

            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 mb-8 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-4xl font-bold text-gray-700">
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Approach</span> To Be Used
                    </h2>
                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                {steps.map((step) => (
                    <Steps key={step.number} number={step.number} title={step.title} description={step.description} list={step.list} side={step.side as "left" | "right"} image={step.image} />
                ))}
            </div>

            <SectionDivider />
            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-4xl font-bold text-gray-700">
                        What <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">We Are Doing</span> For This?
                    </h2>
                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                    <h2 className="text-4xl font-bold text-gray-700">
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Tech Stak</span> We Leverage
                    </h2>
                    <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

export default WebDevelopment;
