import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface SolutionProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const Solution = ({ title, description, icon }: SolutionProps) => {
    return (
        <>
            <Card className="group relative h-fit gap-3 rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-none transition-transform duration-300">
                <div className="absolute inset-0 origin-bottom scale-y-0 transform bg-gradient-to-b from-gray-50 via-gray-100/80 to-gray-200/80 transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
                <CardHeader className="flex gap-4 p-0">
                    <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-primary-400 p-2 text-gray-700">{icon}</div>
                    <h4 className="flex flex-1 flex-col justify-center font-semibold">{title}</h4>
                </CardHeader>
                <CardBody className="p-0">
                    <p className="text-gray-600">{description}</p>
                </CardBody>
            </Card>
        </>
    );
};

export default Solution;
