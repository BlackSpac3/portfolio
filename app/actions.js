"use server";

import AutoReplyMail from "@/components/mails/AutoReplyMail";
import FeedbackMail from "@/components/mails/FeedbackMail";
import { emailRegex, validateString } from "@/lib/utils";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";

export const sendMail = async (formData) => {
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
  const autoReplyHtml = await render(<AutoReplyMail email={email} />);

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
    from: `${email.split("@")[0]} <${email}>`,
    to: "devbyjacobs@gmail.com",
    subject: `Message from ${email}`,
    html,
  };

  const autoReplyMailData = {
    from: "Jacobs Development <devbyjacobs@gmail.com>",
    to: email,
    subject: `Automatic Reply`,
    html: autoReplyHtml,
  };

  try {
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

    await new Promise((resolve, reject) => {
      transporter.sendMail(autoReplyMailData, (err, info) => {
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
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong somewhere" };
  }
};
