"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
    { id: 1, name: "Automation & Efficiency", description: "Our solutions ensure seamless workflows, reducing downtime and boosting productivity.", image: "/assets/images/test-tech.jpg" },
    { id: 2, name: "AI and IoT Integration", description: "Transform your operations with data-driven insights and intelligent devices.", image: "/assets/images/iot-integration.jpg" },
    { id: 3, name: "Innovative Software Solutions", description: "We craft powerful software tailored to meet your business needs with seamless functionality and cutting-edge technologies.", image: "/assets/images/innovative-software.jpg" },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState("right");

    useEffect(() => {
        const interval = setInterval(() => {
            moveToNextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const moveToNextSlide = () => {
        setDirection("right");
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // const moveToPreviousSlide = () => {
    //     setDirection("left");
    //     setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    // };

    const handleDotClick = (index: number) => {
        if (index > currentSlide) {
            setDirection("right");
        } else {
            setDirection("left");
        }
        setCurrentSlide(index);
    };

    return (
        <div className="flex h-fit flex-col gap-6 px-4 py-4 md:max-h-[752px] md:flex-row md:py-8 xl:px-8">
            <div className="flex flex-1 flex-col gap-10 rounded-2xl bg-primary-500 p-10 md:p-16">
                <div className="flex flex-col gap-1 sm:gap-4">
                    <span className="bg-gradient-to-t from-slate-100 via-blue-200 to-indigo-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-6xl 2xl:text-7xl">Put a Thick Dot</span>
                    <span className="bg-gradient-to-t from-slate-100 via-blue-200 to-indigo-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-6xl 2xl:text-7xl">on Tech Worries</span>
                    <span className="bg-gradient-to-t from-slate-100 via-blue-200 to-indigo-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-6xl 2xl:text-7xl">We’ve Got It Covered</span>
                </div>
                <p className="w-full text-lg text-gray-100 md:w-3/4 md:text-xl">Transform your brand, unleash the power of digital with us and turn bold visions into market success. We are a team of passionate individuals who are dedicated to helping you achieve your goals.</p>
                <div className="mt-auto flex flex-col gap-6 md:flex-row">
                    <Button variant="solid" className="bg-gray-50 font-medium text-gray-700" radius="full" size="lg" as={Link} href="/contact">
                        Get Started
                    </Button>
                    <Button variant="flat" className="bg-white/20 font-medium text-gray-100 backdrop-blur" radius="full" size="lg" as={Link} href="/about">
                        Learn More
                    </Button>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 xl:w-1/3">
                <div className="relative h-96 w-full overflow-hidden md:h-full">
                    {slides.map((slide, index) => (
                        <div key={index} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className={`absolute inset-0 top-0 h-full w-full overflow-hidden rounded-2xl transition-transform duration-700 ease-in-out ${index === currentSlide ? "translate-x-0 transform" : direction === "right" ? "translate-x-full transform" : "-translate-x-full transform"}`}>
                            <div className="flex h-full w-full flex-col rounded-lg text-center">
                                <div className="mt-auto bg-gradient-to-t from-gray-900 to-transparent px-3 py-6">
                                    <h2 className="text-3xl font-semibold text-gray-50">{slide.name}</h2>
                                    <p className="mt-1.5 text-medium text-gray-100">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Navigation Dots */}
                <div className="absolute left-1/2 top-4 flex -translate-x-1/2 transform gap-2">
                    {slides.map((_, index) => (
                        <button key={index} onClick={() => handleDotClick(index)} className={`h-3 w-3 rounded-full border-2 border-white ${index === currentSlide ? "bg-white" : "bg-transparent"}`}></button>
                    ))}
                </div>
            </div>
        </div>
    );
}
