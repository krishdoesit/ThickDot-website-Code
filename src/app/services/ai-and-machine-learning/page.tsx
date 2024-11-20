import { Metadata } from "next";
import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";
import AnalysisIcon from "@/components/Icons/Filled/Analysis";
import ScannerIcon from "@/components/Icons/Filled/Scanner";
import CodeIcon from "@/components/Icons/Filled/Code";
import CloudMigrationIcon from "@/components/Icons/Filled/CloudMigration";

export const metadata: Metadata = {
    title: "AI & Machine Learning Services",
    description: "Transform your business operations with our advanced AI and Machine Learning services. We leverage cutting-edge technologies to analyze data, predict trends, and automate decision-making.",
};

const steps = [
    {
        number: 1,
        title: "Discovery & Assessment",
        description: "We start with a comprehensive discovery phase to understand your business objectives and data landscape. This includes assessing existing data sources, identifying key performance indicators (KPIs), and defining the scope of AI/ML implementation tailored to your needs.",
        list: ["In-depth stakeholder interviews", "Data source identification and evaluation", "KPI definition for measurable outcomes", "Market analysis to identify opportunities"],
        side: "left",
        image: "/assets/images/approach/planning.jpg",
    },
    {
        number: 2,
        title: "Model Development",
        description: "Our team designs and develops custom AI and ML models that align with your specific business goals. This involves selecting appropriate algorithms, training models on your data, and iterating based on performance metrics to ensure accuracy and reliability.",
        list: ["Algorithm selection tailored to use cases", "Data preprocessing for optimal model training", "Iterative model refinement based on feedback", "Documentation of model performance metrics"],
        side: "right",
        image: "/assets/images/approach/development.jpg",
    },
    {
        number: 3,
        title: "Integration & Deployment",
        description: "We integrate the developed AI/ML models into your existing systems, ensuring seamless functionality. Our deployment process includes setting up APIs, user interfaces, and workflows that allow for easy access to insights generated by the models.",
        list: ["API development for model access", "User-friendly dashboards for insights visualization", "Workflow automation for decision-making processes", "Comprehensive testing to ensure system reliability"],
        side: "left",
        image: "/assets/images/approach/deployment.jpg",
    },
    {
        number: 4,
        title: "Monitoring & Optimization",
        description: "Post-deployment, we continuously monitor the performance of AI/ML models to ensure they deliver accurate results over time. Our optimization process includes regular updates, retraining models with new data, and fine-tuning algorithms based on evolving business needs.",
        list: ["Continuous model performance monitoring", "Regular updates based on new data inputs", "Feedback loops for ongoing improvement", "Performance reports to track impact on KPIs"],
        side: "right",
        image: "/assets/images/approach/testing.jpg",
    },
    {
        number: 5,
        title: "Data Strategy & Governance",
        description: "We assist in establishing a robust data strategy that governs how data is collected, managed, and utilized within your organization. This includes implementing best practices for data security, compliance, and ethical AI usage.",
        list: ["Data governance framework development", "Compliance checks for regulations (GDPR, CCPA)", "Security protocols for sensitive data management", "Training sessions on ethical AI practices"],
        side: "left",
        image: "/assets/images/approach/analysis.jpg",
    },
    {
        number: 6,
        title: "Training & Support",
        description: "To ensure your team can effectively utilize AI/ML solutions, we provide comprehensive training and ongoing support. This empowers your staff to leverage insights and make informed decisions confidently.",
        list: ["Tailored training programs for different user levels", "Ongoing technical support for troubleshooting", "Knowledge transfer sessions for internal teams", "Access to resources and documentation"],
        side: "right",
        image: "/assets/images/approach/support.jpg",
    },
];

const solutions = [
    {
        title: "Predictive Analytics",
        description: "Utilize historical data to forecast future trends, enabling proactive decision-making that drives growth.",
        icon: <AnalysisIcon />,
    },
    {
        title: "Natural Language Processing",
        description: "Enhance customer interactions through intelligent chatbots and sentiment analysis tools that understand user intent.",
        icon: <CodeIcon />,
    },
    {
        title: "Computer Vision Solutions",
        description: "Implement image recognition systems that automate quality control processes and enhance security measures.",
        icon: <ScannerIcon />,
    },
    {
        title: "Recommendation Engines",
        description: "Improve customer engagement by delivering personalized product recommendations based on user behavior and preferences.",
        icon: <CloudMigrationIcon />,
    },
];

const techStacks = [
    {
        name: "OpenAI GPT",
        image: "/assets/images/technology/chatgpt.png",
    },
    {
        name: "TensorFlow",
        image: "/assets/images/technology/tensorflow.png",
    },
    {
        name: "Pytorch",
        image: "/assets/images/technology/pytorch.png",
    },
];

const AiAndMachineLearning = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Unlock Potential with <SelectedText text="AI" /> & <SelectedText text="Machine" /> Learning Solutions.
                    </h2>
                    <p>Transform your business operations with our advanced AI and Machine Learning services. We leverage cutting-edge technologies to analyze data, predict trends, and automate decision-making, empowering you to drive innovation and enhance customer experiences.</p>
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
                    <Image src="/assets/images/services/ai-and-machine-learning.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
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
                        Our <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">AI Solutions</span> Tailored to your Business
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

export default AiAndMachineLearning;
