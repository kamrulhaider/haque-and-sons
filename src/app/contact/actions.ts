"use server";

import * as z from "zod";
import { Resend } from "resend";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

const resend = new Resend(
  process.env.RESEND_API_KEY ?? "re_4BTG8Jgm_Bo74z2ZSgPx8ScoxhTc4ts99"
);

export async function submitInquiry(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data." };
  }

  const data = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Website Contact <no-reply@haquensons.com>",
      to: "info@haquensons.com",
      subject: data.subject || `New inquiry from ${data.name}`,
      replyTo: data.email,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "N/A"}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email", error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
