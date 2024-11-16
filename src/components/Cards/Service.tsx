import { Button, Card, CardBody, CardFooter, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";
import ArrowRightIcon from "../Icons/ArrowRight";

const Service = ({ title, description, image, link, color }: { title: string; description: string; image: string; link: string; color: string }) => {
    return (
        <Card className={`service-card border border-divider bg-gradient-to-t ${color} p-4 shadow-sm hover:shadow-xl`}>
            <CardHeader className="w-full">
                <Image src={image} alt={title} className="h-auto w-full rounded-xl" width={500} height={500} />
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
            </CardBody>
            <CardFooter>
                <Button as={Link} href={link} variant="flat" color="primary" radius="full" endContent={<ArrowRightIcon size={16} />} className="animate-pulse hover:animate-none" isIconOnly />
            </CardFooter>
        </Card>
    );
};

export default Service;
