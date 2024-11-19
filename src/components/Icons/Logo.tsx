import Image from "next/image";

export default function LogoIcon({ size, height, ...props }: any) {
    return <Image src={"/assets/logo.png"} alt="Logo" height={height || size} width={size} className="w-auto" {...props} quality={100} />;
}
