/**
 * @name NodeMailer
 *
 * @description This is the NodeMailer configuration file to configure the email provider.
 */

import nodemailer from "nodemailer"; // Import nodemailer

// Export the transporter object to send emails
export const transporter = nodemailer.createTransport({
    service: "gmail", // Email service provider
    auth: {
        user: process.env.SMTP_USER, // Email address
        pass: process.env.SMTP_PASSWORD, // Email password
    },
});
