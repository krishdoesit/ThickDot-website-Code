import TickIcon from "@/components/Icons/Tick";
import Image from "next/image";

const Steps = ({ number, title, description, list, side, image }: { number: number; title: string; description: string; list: string[]; side: "left" | "right"; image: string }) => {
    return (
        <div className={`flex w-full ${side === "left" ? "flex-row-reverse" : ""}`}>
            <div className="relative h-fit w-full max-w-5xl shrink-0 overflow-hidden">
                <div className="absolute right-1/2 top-0 w-3/4 translate-x-1/2 rounded-b-3xl bg-primary px-4 py-2 text-center text-medium font-semibold tracking-wide text-white drop-shadow-lg md:right-20 md:w-max md:translate-x-0 md:px-8 md:text-xl">{title}</div>
                <div className="absolute left-0 top-20 rounded-r-3xl bg-primary px-6 py-8 text-3xl font-bold text-white drop-shadow-lg md:top-1/2 md:-translate-y-1/2">{number}</div>
                <div className="flex h-full w-full flex-col gap-6 rounded-3xl border-2 border-gray-200 p-5 md:flex-row">
                    <Image src={image} alt="About" width={1000} height={1000} className="h-fit w-full shrink-0 overflow-hidden rounded-2xl object-cover md:h-full md:w-1/3" />
                    <div className="flex flex-col gap-5 text-gray-700 md:pt-10">
                        <p className="text-justify">{description}</p>
                        <ul className="flex flex-col gap-3">
                            {list.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <TickIcon size={20} className="shrink-0 text-teal-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Image src="/assets/images/triangle-dots.png" alt="Triangle Dots" width={80} height={80} className="absolute bottom-5 right-5 h-20 w-20 opacity-20 md:opacity-100" />
            </div>
            <div className={`relative ${side === "left" ? "ml-10" : "mr-10"} hidden w-full items-center xl:flex`}>
                <span className="h-1 w-full bg-primary"></span>
                <span className={`absolute ${side === "left" ? "left-0" : "right-0"} top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-dashed border-primary bg-white`}>
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-5 w-5 rounded-full bg-primary"></span>
                </span>
            </div>
        </div>
    );
};

export default Steps;
