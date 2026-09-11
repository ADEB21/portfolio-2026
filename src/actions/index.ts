import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { render } from "react-email";
import { z } from "astro/zod";
import ContactNotification from "../emails/ContactNotification";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
        firstname: z.string(),
        lastname: z.string(),
        email: z.email(),
        subject: z.string(),
        message: z.string(),
    }),
    handler: async ({firstname, lastname, email, subject, message}) => {
      const emailContent = ContactNotification({
        firstname,
        lastname,
        email,
        subject,
        message,
      });

      const html = await render(emailContent);
      const text = await render(emailContent, { plainText: true });

      const { data, error } = await resend.emails.send({
        from: "Arthur <arthur@contact.arthurdebruille.fr>",
        to: "arthurdebruille@proton.me",
        subject: "Nouvelle notification du portfolio !",
        html,
        text,
      });

      if (error) {
        throw error;
      }

      return data;
    },
  }),
};
