import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/Animation/AnimatedBeam";

import TerminalIcon from "@/components/Icons/Terminal";
import UserIcon from "@/components/Icons/User";
import ShieldIcon from "@/components/Icons/Shield";

const TechStack = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div className={cn("relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10")} ref={containerRef}>
            <div className="flex size-full max-w-2xl flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center gap-4">
                    <Circle ref={div1Ref}>
                        <TerminalIcon className="text-teal-500" />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <TerminalIcon className="text-indigo-500" />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <TerminalIcon className="text-orange-500" />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <TerminalIcon className="text-purple-500" />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <TerminalIcon className="text-rose-500" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="size-16">
                        <ShieldIcon className="text-primary" size={32} />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div7Ref}>
                        <UserIcon className="text-gray-600" />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} />
        </div>
    );
};

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => {
    return (
        <div ref={ref} className={cn("z-10 flex size-12 items-center justify-center rounded-full border border-divider bg-white p-3 drop-shadow-lg", className)}>
            {children}
        </div>
    );
});
Circle.displayName = "Circle";

export default TechStack;
