import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-5 px-4 py-4">
            <Image src="/assets/images/404.png" width={1000} height={1000} alt="404" className="h-auto w-full max-w-3xl" />
            <Button as={Link} href="/" color="primary" radius="full">
                Return Home
            </Button>
        </div>
    );
}
