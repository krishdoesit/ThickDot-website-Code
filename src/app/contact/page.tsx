"use client";

import EmailIcon from "@/components/Icons/Email";
import LocationIcon from "@/components/Icons/Location";
import PhoneIcon from "@/components/Icons/Phone";
import TwitterIcon from "@/components/Icons/Twitter";
import LinkedInIcon from "@/components/Icons/LinkedIn";
import { Input, RadioGroup, Radio, Textarea, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
    const [selected, setSelected] = useState("london");

    return (
        <>
            <div className="mt-16 flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Get in touch</h2>
                <p className="text-center text-lg font-medium text-gray-600">Any question or remarks? Just write us a message!</p>
            </div>
            <div className="mx-4 my-10 flex w-auto flex-col rounded-3xl border border-gray-200 bg-gray-50 drop-shadow-sm lg:flex-row">
                <div className="w-full p-4 lg:w-1/2">
                    <div className="relative flex h-full w-full flex-col justify-between gap-16 overflow-hidden rounded-2xl bg-gray-900 p-6 text-white md:p-10">
                        <div>
                            <h3 className="text-2xl font-semibold">Contact Information</h3>
                            <p className="text-lg text-gray-400">Say something to start a live chat!</p>
                        </div>
                        <div className="flex flex-col gap-8 text-gray-300">
                            <div className="flex items-center gap-4">
                                <PhoneIcon size={28} />
                                <p className="text-lg font-medium">+44 020 7946 0958</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <EmailIcon size={28} />
                                <p className="text-lg font-medium">info@example.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <LocationIcon size={28} />
                                <p className="text-lg font-medium">123 Anywhere, Any City, NY 12345</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <Link href="#" className="text-gray-300 hover:text-gray-400">
                                <TwitterIcon size={28} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-gray-400">
                                <LinkedInIcon size={28} />
                            </Link>
                        </div>
                        <Image src="/assets/images/ellipse.png" alt="Letter Send" width={210} height={210} quality={100} className="absolute bottom-0 right-0 size-24 sm:size-32 md:size-52" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <form className="flex flex-col gap-6 px-8 pt-8">
                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input label="Your Name" variant="underlined" />
                            <Input label="Company Name" variant="underlined" />
                        </div>
                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input label="Email" variant="underlined" />
                            <Input label="Phone" variant="underlined" />
                        </div>
                        {/* Select Subject */}
                        <div className="mt-4">
                            <RadioGroup value={selected} onValueChange={setSelected} label="Select Subject" orientation="horizontal" classNames={{ label: "text-small", wrapper: "gap-4" }}>
                                <Radio value="general" classNames={{ label: "text-gray-600" }}>
                                    General Inquiry
                                </Radio>
                                <Radio value="support" classNames={{ label: "text-gray-600" }}>
                                    Support
                                </Radio>
                                <Radio value="billing" classNames={{ label: "text-gray-600" }}>
                                    Billing
                                </Radio>
                                <Radio value="other" classNames={{ label: "text-gray-600" }}>
                                    Other
                                </Radio>
                            </RadioGroup>
                        </div>
                        <div className="mt-2">
                            <Textarea label="Message" variant="underlined" />
                        </div>
                        <Button color="primary" className="ml-auto mt-6 w-fit">
                            Send Message
                        </Button>
                        <Image src="/assets/images/letter-send.png" alt="Letter Send" width={266} height={136} quality={100} className="ml-auto mr-10" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
