"use server";

import FeedbackMail from "@/components/FeedbackMail";
import { emailRegex, validateString } from "@/lib/utils";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export const sendMail = async (formData) => {
  console.log(formData.get("email"));
  console.log(formData.get("message"));

  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500) || !emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email.",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      success: false,
      message: "Please enter a message.",
    };
  }

  const html = await render(<FeedbackMail email={email} message={message} />);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_KEY,
    },
  });

  const mailData = {
    from: email,
    to: "devbyjacobs@gmail.com",
    subject: `Message from ${email}`,
    html,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return { success: true, message: "Message sent successfully" };
};
