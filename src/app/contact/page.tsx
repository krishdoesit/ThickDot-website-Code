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
import settings from "@/../../settings.json";

import { sendEmail } from "@/lib/email/contact";
import { toast } from "sonner";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("general");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Manual validation for each field
        if (!name || !company || !email || !phone || !subject || !message) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const html = `
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <br />
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
        `;
        const response = await sendEmail(name, email, "New message from ThickDot", html);

        if (response) {
            toast.success("Message sent successfully!");
        } else {
            toast.error("Failed to send message. Please try again later.");
        }

        setEmail("");
        setName("");
        setCompany("");
        setPhone("");
        setMessage("");
        setSubject("general");
    };

    return (
        <>
            <div className="mt-16 flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Get in touch</h2>
                <p className="text-center text-lg font-medium text-gray-600">Any question or remarks? Just write us a message!</p>
            </div>
            <div className="mx-4 my-10 flex w-auto flex-col rounded-3xl border border-gray-200 bg-gray-50 shadow-sm lg:flex-row">
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
                            <Link href={settings.social[0].url} className="text-gray-300 hover:text-gray-400">
                                <TwitterIcon size={28} />
                            </Link>
                            <Link href={settings.social[1].url} className="text-gray-300 hover:text-gray-400">
                                <LinkedInIcon size={28} />
                            </Link>
                        </div>
                        <Image src="/assets/images/ellipse.png" alt="Letter Send" width={210} height={210} quality={100} className="absolute bottom-0 right-0 size-24 sm:size-32 md:size-52" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <form className="flex flex-col gap-6 px-8 pt-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input label="Your Name" variant="underlined" value={name} onValueChange={setName} isRequired required />
                            <Input label="Company Name" variant="underlined" value={company} onValueChange={setCompany} isRequired required />
                        </div>
                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input label="Email" variant="underlined" type="email" value={email} onValueChange={setEmail} isRequired required />
                            <Input label="Phone" variant="underlined" maxLength={14} value={phone} onValueChange={setPhone} isRequired required />
                        </div>
                        {/* Select Subject */}
                        <div className="mt-4">
                            <RadioGroup value={subject} onValueChange={setSubject} label="Select Subject" orientation="horizontal" classNames={{ label: "text-small", wrapper: "gap-4" }} isRequired>
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
                            <Textarea label="Message" variant="underlined" value={message} onValueChange={setMessage} isRequired required />
                        </div>
                        <Button color="primary" className="ml-auto mt-6 w-fit" type="submit">
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
