import Image from "next/image";

const TechStack = ({ name, image }: { name: string; image: string }) => {
    return (
        <div className="flex flex-col justify-center gap-2">
            <div className="rounded-2xl border-2 border-dashed border-gray-200 p-2">
                <div className="flex justify-center rounded-xl bg-gray-100 p-2 transition-colors duration-300 hover:bg-primary-50">
                    <Image src={image} alt={name} width={80} height={80} />
                </div>
            </div>
            <span className="text-center text-base font-medium text-gray-600">{name}</span>
        </div>
    );
};

export default TechStack;
