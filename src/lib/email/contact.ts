"use server";

import { transporter } from "@/lib/email/config";

export async function sendEmail(name: string, from: string, subject: string, html: string) {
    try {
        console.log(from);
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO,
            subject: subject,
            html: html,
        });
        console.log("Email sent successfully");
        return true;
    } catch (error) {
        console.error("Error sending email: ", error);
        return false;
    }
}
