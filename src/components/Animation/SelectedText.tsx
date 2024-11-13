const SelectedText = ({ text }: { text: string }) => {
    return (
        <>
            {" "}
            <span className="relative inline-block whitespace-nowrap border-2 border-primary pl-3 pr-6 italic text-primary">
                {text}{" "}
                <span className="absolute -bottom-3 -right-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-primary bg-white">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-3 w-3 rounded-full bg-primary"></span>
                </span>
                <span className="absolute -bottom-3 -left-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-primary bg-white">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-3 w-3 rounded-full bg-primary"></span>
                </span>
                <span className="absolute -right-3 -top-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-primary bg-white">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-3 w-3 rounded-full bg-primary"></span>
                </span>
                <span className="absolute -left-3 -top-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-primary bg-white">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary-300"></span>
                    <span className="z-10 h-3 w-3 rounded-full bg-primary"></span>
                </span>
            </span>{" "}
        </>
    );
};

export default SelectedText;
