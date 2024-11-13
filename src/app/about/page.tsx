import SelectedText from "@/components/Animation/SelectedText";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const About = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 py-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col gap-4 md:p-6 lg:w-1/2">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        We are an <SelectedText text="AI-Powered" /> company that makes dreams come true.
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="mt-4 flex gap-4 md:mt-8">
                        <Button color="primary" radius="full">
                            Get Started
                        </Button>
                        <Button variant="flat" className="bg-gray-200" radius="full">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="w-full shrink-0 lg:w-1/2">
                    <Image src="/assets/images/map.png" alt="About" width={1000} height={500} className="my-auto h-auto w-full" />
                </div>
            </div>
        </>
    );
};

export default About;
