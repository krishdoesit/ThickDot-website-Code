import { Metadata } from "next";
import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import ShieldIcon from "@/components/Icons/Filled/Shield";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";
import ScannerIcon from "@/components/Icons/Filled/Scanner";
import DevicesIcon from "@/components/Icons/Filled/Devices";
import FileIcon from "@/components/Icons/Filled/File";

export const metadata: Metadata = {
    title: "Blockchain Development Services",
    description: "We offer comprehensive blockchain development services to help businesses leverage the power of blockchain technology for secure, transparent, and efficient solutions.",
};

const steps = [
    {
        number: 1,
        title: "Consultation & Strategy",
        description: "We begin with a detailed consultation to understand your business objectives and the specific challenges you face. Our team collaborates with you to define a clear blockchain strategy that aligns with your goals, ensuring a tailored approach that maximizes the benefits of blockchain technology.",
        list: ["In-depth stakeholder interviews to gather insights", "Analysis of existing processes and pain points", "Customized blockchain strategy development", "Feasibility studies to assess implementation viability"],
        side: "left",
        image: "/assets/images/approach/planning.jpg",
    },
    {
        number: 2,
        title: "Blockchain Architecture Design",
        description: "Our experts design a robust blockchain architecture tailored to your needs. This phase includes selecting the appropriate blockchain platform (e.g., Ethereum, Hyperledger), defining consensus mechanisms, and outlining data structures to ensure scalability and security.",
        list: ["Custom architecture design for optimal performance", "Platform selection based on use case requirements", "Definition of consensus algorithms (PoW, PoS, etc.)", "Data structure design for efficient transaction processing"],
        side: "right",
        image: "/assets/images/approach/design.jpg",
    },
    {
        number: 3,
        title: "Smart Contract Development",
        description: "We develop secure and efficient smart contracts that automate processes and enforce agreements without intermediaries. Our team rigorously tests these contracts to ensure they function as intended, minimizing risks associated with deployment.",
        list: ["Custom smart contract development for various applications", "Comprehensive testing protocols to ensure reliability", "Integration with existing systems for seamless operation", "Security audits to identify and mitigate vulnerabilities"],
        side: "left",
        image: "/assets/images/approach/development.jpg",
    },
    {
        number: 4,
        title: "Decentralized Application (DApp) Development",
        description: "We build decentralized applications (DApps) that leverage blockchain technology for enhanced security and transparency. Our DApps are designed to provide user-friendly interfaces while ensuring robust backend functionality.",
        list: ["Full-stack DApp development (frontend and backend)", "User interface design focused on user experience", "Integration with wallets for secure transactions", "Continuous updates and improvements based on user feedback"],
        side: "right",
        image: "/assets/images/approach/application.jpg",
    },
    {
        number: 5,
        title: "Deployment & Integration",
        description: "After development, we deploy your blockchain solution in a live environment. Our team ensures smooth integration with your existing systems, providing training and support to facilitate user adoption.",
        list: ["Comprehensive deployment planning and execution", "Integration with legacy systems for data continuity", "User training sessions for effective utilization", "Post-deployment support for troubleshooting"],
        side: "left",
        image: "/assets/images/approach/deployment.jpg",
    },
    {
        number: 6,
        title: "Maintenance & Support",
        description: "We offer ongoing maintenance and support services to ensure your blockchain solution remains secure, efficient, and up-to-date. This includes regular performance monitoring, updates, and enhancements based on emerging technologies.",
        list: ["24/7 monitoring of system performance", "Regular updates for security patches and enhancements", "Technical support for troubleshooting issues", "Strategic consultations for future improvements"],
        side: "right",
        image: "/assets/images/approach/support.jpg",
    },
];

const solutions = [
    {
        title: "Supply Chain Management",
        description: "Enhance transparency and traceability in supply chains through blockchain solutions that track products from origin to delivery.",
        icon: <DevicesIcon />,
    },
    {
        title: "Secure Transactions",
        description: "Implement secure payment systems using blockchain technology to reduce fraud and enhance trust in financial transactions.",
        icon: <ShieldIcon />,
    },
    {
        title: "Tokenization of Assets",
        description: "Convert physical assets into digital tokens on the blockchain, enabling fractional ownership and improved liquidity.",
        icon: <FileIcon />,
    },
    {
        title: "Identity Verification Solutions",
        description: "Develop decentralized identity verification systems that enhance security while protecting user privacy.",
        icon: <ScannerIcon />,
    },
];

const techStacks = [
    {
        name: "Hyperledger",
        image: "/assets/images/technology/hyperledger.png",
    },
    {
        name: "Ethereum",
        image: "/assets/images/technology/ethereum.png",
    },
];

const BlockchainDevelopment = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Revolutionize Your Business with <SelectedText text="Blockchain" /> Development Services.
                    </h2>
                    <p>Embrace the future of technology with our comprehensive blockchain development services. We create secure, decentralized applications and smart contracts that enhance transparency, streamline operations, and reduce costs, empowering your business to innovate and thrive.</p>
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
                    <Image src="/assets/images/services/blockchain-development.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
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
                        Innovative <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Blockchain Solutions</span> for the Future
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

export default BlockchainDevelopment;
