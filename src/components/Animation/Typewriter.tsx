"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    fixedText: string;
    words: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    delay?: number;
    [key: string]: any; // Allow additional props
}

export default function Typewriter({ fixedText, words, typingSpeed = 100, erasingSpeed = 50, delay = 1000, ...props }: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let typingTimeout: NodeJS.Timeout;

        if (!isErasing && displayedText === currentWord) {
            typingTimeout = setTimeout(() => setIsErasing(true), delay);
        } else if (isErasing && displayedText === "") {
            setIsErasing(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else if (isErasing) {
            typingTimeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
            }, erasingSpeed);
        } else {
            typingTimeout = setTimeout(() => {
                setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
            }, typingSpeed);
        }

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isErasing, currentWordIndex, words, delay, typingSpeed, erasingSpeed]);

    return (
        <div {...props}>
            {fixedText} <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">{displayedText}</span>
            <span className="cursor-blink bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">|</span>
        </div>
    );
}
