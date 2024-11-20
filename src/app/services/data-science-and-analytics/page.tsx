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
import ChargeIcon from "@/components/Icons/Filled/Charge";

export const metadata: Metadata = {
    title: "Data Science and Analytics Services",
    description: "Our Data Science and Analytics services empower businesses to transform raw data into actionable insights. We utilize advanced analytics, machine learning, and visualization tools to help you make informed decisions.",
};

const steps = [
    {
        number: 1,
        title: "Data Discovery & Assessment",
        description: "We start with a comprehensive data discovery phase to understand your existing data landscape. Our team assesses data quality, identifies key data sources, and evaluates your current analytics capabilities. This foundational step ensures that we align our approach with your business goals and requirements.",
        list: ["Stakeholder interviews to gather insights on data usage", "Data inventory creation for visibility into available assets", "Quality assessment to identify gaps and opportunities", "Benchmarking against industry standards for best practices"],
        side: "left",
        image: "/assets/images/approach/planning.jpg",
    },
    {
        number: 2,
        title: "Data Preparation & Cleaning",
        description: "Our experts prepare and clean your data to ensure accuracy and consistency. This involves data transformation, handling missing values, and normalizing datasets to create a reliable foundation for analysis. We also implement ETL (Extract, Transform, Load) processes to streamline data integration.",
        list: ["Automated ETL processes for efficient data handling", "Data normalization and standardization techniques", "Outlier detection and correction methods", "Documentation of data lineage for transparency"],
        side: "right",
        image: "/assets/images/approach/design.jpg",
    },
    {
        number: 3,
        title: "Exploratory Data Analysis (EDA)",
        description: "We conduct exploratory data analysis to uncover patterns, correlations, and insights within your data. This phase includes visualizations that help stakeholders understand trends and anomalies, providing a basis for further analysis and decision-making.",
        list: ["Interactive visualizations using tools like Power BI and Tableau", "Statistical analysis to identify significant trends", "Correlation matrix creation for feature relationships", "Reporting of findings to guide subsequent steps"],
        side: "left",
        image: "/assets/images/approach/analysis.jpg",
    },
    {
        number: 4,
        title: "Model Development & Validation",
        description: "Our team develops predictive models tailored to your business needs using advanced machine learning techniques. We rigorously validate these models through cross-validation and performance metrics to ensure they deliver accurate predictions that can inform strategic decisions.",
        list: ["Selection of appropriate algorithms (e.g., regression, classification)", "Model training on historical data for predictive accuracy", "Performance evaluation using metrics like accuracy, precision, and recall", "Iterative refinement based on validation results"],
        side: "right",
        image: "/assets/images/approach/development.jpg",
    },
    {
        number: 5,
        title: "Data Visualization & Reporting",
        description: "We create intuitive dashboards and reports that visualize key metrics and insights derived from your data. These tools empower stakeholders to monitor performance in real-time and make informed decisions based on clear visual representations of complex information.",
        list: ["Custom dashboard development tailored to user needs", "Real-time data updates for timely decision-making", "Interactive reporting features for deeper insights", "Training sessions on dashboard usage for end-users"],
        side: "left",
        image: "/assets/images/approach/testing.jpg",
    },
    {
        number: 6,
        title: "Ongoing Support & Optimization",
        description: "After implementation, we provide ongoing support to ensure your analytics solutions continue to meet evolving business needs. Our team monitors model performance, updates algorithms as necessary, and offers strategic consultations to optimize outcomes over time.",
        list: ["Continuous monitoring of model performance metrics", "Regular updates based on new data inputs and business changes", "Technical support for troubleshooting issues", "Strategic reviews to identify opportunities for enhancement"],
        side: "right",
        image: "/assets/images/approach/support.jpg",
    },
];

const solutions = [
    {
        title: "Predictive Analytics",
        description: "Leverage historical data to forecast future trends and behaviors, enabling proactive decision-making that drives growth.",
        icon: <AnalysisIcon />,
    },
    {
        title: "Business Intelligence Solutions",
        description: "Implement business intelligence tools that provide real-time insights into operations, helping you optimize processes and improve efficiency.",
        icon: <ChargeIcon />,
    },
    {
        title: "Customer Segmentation Analysis",
        description: "Analyze customer data to identify distinct segments, allowing for targeted marketing strategies that enhance engagement.",
        icon: <AnalysisIcon />,
    },
    {
        title: "Market Research & Insights",
        description: "Conduct comprehensive market research using advanced analytics techniques to uncover trends that inform product development and positioning.",
        icon: <ScannerIcon />,
    },
];

const techStacks = [
    {
        name: "AWS S3",
        image: "/assets/images/technology/aws-s3.png",
    },
    {
        name: "SNAP Logic",
        image: "/assets/images/technology/snap-logic.png",
    },
    {
        name: "Power BI",
        image: "/assets/images/technology/power-bi.png",
    },
];

const DataScienceAndAnalytics = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Unlock Insights with <SelectedText text="Data" /> Science and <SelectedText text="Analytics" /> for informed decisions.
                    </h2>
                    <p>In a data-driven world, our Data Science and Analytics services empower businesses to transform raw data into actionable insights. We utilize advanced analytics, machine learning, and visualization tools to help you make informed decisions, optimize operations, and drive strategic growth.</p>
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
                    <Image src="/assets/images/services/data-science-and-analytics.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
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
                        Our <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Data Analytics</span> Solutions
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

export default DataScienceAndAnalytics;
