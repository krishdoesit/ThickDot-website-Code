import Link from "next/link";
import settings from "@/../../settings.json";

import LogoIcon from "@/components/Icons/Logo";
import TwitterIcon from "@/components/Icons/Twitter";
import LinkedInIcon from "@/components/Icons/LinkedIn";
import PhoneIcon from "../Icons/Phone";
import EmailIcon from "../Icons/Email";

const Footer = () => {
    return (
        <div className="mx-auto mt-16 flex w-full max-w-screen-2xl flex-col flex-wrap justify-between gap-8 rounded-t-3xl border border-gray-100 bg-gray-50 px-12 py-14 md:flex-row">
            <div className="flex flex-col gap-6 lg:max-w-sm">
                <div className="flex items-center gap-4">
                    <LogoIcon size={42} />
                    <span className="text-2xl font-bold text-gray-700">Infinia Tech Solutions</span>
                </div>
                <p className="text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard text ever since the 1500s.</p>
                <div className="flex gap-4">
                    <Link href="/" className="rounded-xl border border-divider p-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        <TwitterIcon size={20} />
                    </Link>
                    <Link href="/" className="rounded-xl border border-divider p-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        <LinkedInIcon size={20} />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-md">
                <h3 className="text-lg font-semibold text-gray-700">Quick Links</h3>
                <ul className="flex flex-col gap-3">
                    {settings.footer1.map((item) => (
                        <li key={item.name}>
                            <Link href={item.url} className="text-gray-600 hover:text-primary">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-md">
                <h3 className="text-lg font-semibold text-gray-700">Services</h3>
                <ul className="flex flex-col gap-3">
                    {settings.footer2.map((item) => (
                        <li key={item.name}>
                            <Link href={item.url} className="text-gray-600 hover:text-primary">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-md">
                <h3 className="text-lg font-semibold text-gray-700">Contact Info</h3>
                <div className="flex flex-col gap-3">
                    <p className="flex items-center gap-2 text-gray-600">
                        <PhoneIcon size={22} />
                        +44 020 7946 0958
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                        <EmailIcon size={22} />
                        info@infiniatechsolutions.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
