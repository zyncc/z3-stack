import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { JSX } from "react";

type SendEmailProps<T> = {
  template: JSX.Element;
  data: T;
};

export async function sendEmail<T>({
  template: TemplateComponent,
  data,
}: SendEmailProps<T>) {
  "use server";

  const transporter = nodemailer.createTransport({
    host: "host",
    port: 465,
    secure: true,
    auth: {
      user: "support@company.com",
      pass: "password",
    },
  });

  const emailHtml = await render(TemplateComponent);

  const options = {
    from: "Company <support@company.com>",
    to: "",
    subject: "",
    html: emailHtml,
  };

  const sentEmail = await transporter.sendMail(options);
  console.log(`Sent email to ${sentEmail.accepted[0]}`);
}
