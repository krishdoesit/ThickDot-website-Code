import { cn } from "@/lib/utils";

const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) => {
    return (
        <div className={cn("group/feature relative flex flex-col py-10 lg:border-r", (index === 0 || index === 4) && "lg:border-l", index < 4 && "lg:border-b")}>
            {index < 4 && <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />}
            {index >= 4 && <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />}
            <div className="relative z-10 mb-4 px-10 text-gray-600">{icon}</div>
            <div className="relative z-10 mb-2 px-10 text-lg font-bold">
                <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500" />
                <span className="inline-block text-gray-800 transition duration-200 group-hover/feature:translate-x-2">{title}</span>
            </div>
            <p className="relative z-10 max-w-xs px-10 text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default Feature;
