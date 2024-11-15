import Image from "next/image";

const Pros = ({ name, description, image }: { name: string; description: string; image: string }) => {
    return (
        <div className="flex h-fit max-w-[350px] flex-col gap-5 rounded-3xl bg-gradient-to-t from-white to-slate-50 p-8 shadow-xl transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
            <Image src={image} alt={name} width={500} height={500} className="h-fit w-full rounded-t-2xl" />
            <div className="flex flex-col gap-3">
                <h4 className="text-center text-xl font-bold text-gray-700">{name}</h4>
                <p className="text-center text-sm font-medium text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default Pros;
