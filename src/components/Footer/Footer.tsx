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
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <LogoIcon size={58} />
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="text-2xl font-bold text-gray-700">ThickDot</span>
                        <span className="text-small font-medium text-gray-500">{"© 2024."} All rights reserved</span>
                    </div>
                </div>
                <p className="text-gray-600">At ThickDot, we bridge the gap between cutting-edge technology and real-world business needs.</p>
                <div className="flex gap-4">
                    <Link href={settings.social[0].url} className="rounded-xl border border-divider p-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        <TwitterIcon size={20} />
                    </Link>
                    <Link href={settings.social[1].url} className="rounded-xl border border-divider p-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
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
                <h3 className="text-lg font-semibold text-gray-700">Policies</h3>
                <ul className="flex flex-col gap-3">
                    {settings.footer3.map((item) => (
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
                        <Link href="tel:+14379862272">+1 (437)-986-2272</Link>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                        <EmailIcon size={22} />
                        <Link href="mailto:info@thickdot.com" className="hover:text-primary">
                            <Link href="mailto:info@thickdot.com">info@thickdot.com</Link>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
